import { IUser } from "../models/interfaces";
import User from "../models/user";
import UserService from "../services/UserService";

class UserControler{
   static async create(request: any, response: any){
        try {
            const body: IUser = request.body;
            // console.log(request.body);
            const userService = new UserService();
            const user = await userService.create(body);
            console.log(user);
            return response.json(user);
        } catch (err: any) {
            return response.status(400).json({error: err.message});
        }
    }
   static async getUser(request: any, response: any){
        try {
            const {uid} = request.params;
            const userService = new UserService();
            const user = await userService.get(uid);
            console.log(user);
            return response.json(user);
        } catch (err: any) {
            return response.status(400).json({error: err.message});
        }
    }
   static async getImage(request: any, response: any){
        try {
            const {id} = request.params;
            const userService = new UserService();
            const img = await userService.getImg(id);
            return response.json(img);
        } catch (err: any) {
            return response.status(400).json({error: err.message});
        }
    }
}
export default UserControler;