import { IAddress } from "../models/interfaces";
import AddressService from "../services/AddressService";

class AddressController {
    static async create(request: any, response: any){
        try {
            const body: IAddress = request.body;
            const addressService = new AddressService();
            const address = await addressService.create(body);
            return response.json(address);
        } catch (err: any) {
            return response.status(400).json({error: err.message});
        }
    }

}
export default AddressController;