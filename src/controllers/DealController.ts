import { IDeal } from "../models/interfaces";
import DealService from "../services/DealService";

class DealController {
    static async create(request: any, response: any) {
        try {
            const body: IDeal = request.body;
            const dealService = new DealService();
            const deal = await dealService.create(body);
            return response.json(deal);
        } catch (err: any) {
            return response.status(400).json({ error: err.message });
        }
    }

}
export default DealController;