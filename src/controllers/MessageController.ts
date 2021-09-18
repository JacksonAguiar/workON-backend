import ContactService from "../services/ContactService";
import MessageService from "../services/MessageService";

class MessageController {
    static async create(request: any, response: any) {
        try {
            const {text, sent, to, contact_id} = request.body;

            const messageService = new MessageService();

            const message = await messageService.create({text, sent, to, contact_id});
            return response.json(message);
        } catch (err: any) {
            return response.status(400).json({ error: err.message });
        }
    }
    static async get(request: any, response: any) {
        try {
            const {id} = request.params

            const messageService = new MessageService();

            const message = await messageService.get(id);
            return response.json(message);
        } catch (err: any) {
            return response.status(400).json({ error: err.message });
        }
    }
}
export default MessageController;