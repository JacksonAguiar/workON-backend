import { IUser } from "../models/interfaces";
import UserService from "../services/UserService";

const { OAuth2Client } = require('google-auth-library');

class Authentication {

    static async login(request: any, response: any) {
        try {
            const { token } = request.body;
            const userObject: IUser = request.body;

            const userService = new UserService();
            const user = await userService.create(userObject);

            var result = await this.verifyToken(userObject.uid, token);
          
            if (!result)
                return response.status(401).json({ "message": "invalid token." });
           
            return response.json(user);

        } catch (err: any) {
            return response.status(400).json({ error: err.message });
        }
    }

    static async verifyToken(CLIENT_ID: any, TOKEN: any) {
        try {

            const client = new OAuth2Client(CLIENT_ID);
            const ticket = await client.verifyIdToken({
                idToken: TOKEN,
                audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
                // Or, if multiple clients access the backend:
                //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
            });
            const payload = ticket.getPayload();
            const userid = payload['sub'];
            return true;
        } catch (error) {
            return error;
        }
        // If request specified a G Suite domain:
        // const domain = payload['hd'];
    }
}

export default Authentication;