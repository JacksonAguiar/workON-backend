import { IProAccount } from "../models/interfaces";
import ProAccountService from "../services/ProAccountService";

class ProAccountController {
    static async create(request: any, response: any) {
        try {
            const body: IProAccount = request.body;
            const proAccountService = new ProAccountService();
            console.log(body);
            
            const proAccount = await proAccountService.create(body);
            return response.json(proAccount);
        } catch (err: any) {
            return response.status(400).json({ error: err.message });
        }
    }
    static async update(request: any, response: any) {
        try {
            const body: IProAccount = request.body;
            const { id } = request.body;
            const proAccountService = new ProAccountService();
            const proAccount = await proAccountService.update(body, id);
            return response.json(proAccount);
        } catch (err: any) {
            return response.status(400).json({ error: err.message });
        }
    }
    static async getUser(request: any, response: any){
        try {
            const {id} = request.params;
            const userServicePro = new ProAccountService();
            const user = await userServicePro.getUserPro(id);
            console.log(user);
            return response.json(user);
        } catch (err: any) {
            return response.status(400).json({error: err.message});
        }
    }

}
export default ProAccountController;