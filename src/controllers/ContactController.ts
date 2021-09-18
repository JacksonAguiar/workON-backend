import ContactService from "../services/ContactService";
import ProAccountService from "../services/ProAccountService";

class ContactController {
    static async create(request: any, response: any) {
        try {
            const { user_id, seen, pro_id, project_id } = request.body;
            console.log(request.body);
            const contactService = new ContactService();

            const contact = await contactService.create({ user_id, seen, pro_id, project_id });
            return response.json(contact);
        } catch (err: any) {
            return response.status(400).json({ error: err.message });
        }
    }
    
    static async get(request: any, response: any) {
        try {
            const { user_id } = request.params

            const contactService = new ContactService();
            const proService = new ProAccountService();

            const contacts = await contactService.get({ user_id });
            var json: any[] = JSON.parse(JSON.stringify(contacts));
           

            (async () => {
                for (let element of json) {
                    const res = await proService.filter(['proAccounts.category'], null, element.pro_account.id);
                    element.pro_account.category = res.category;
                 }
                return response.send(json);
            })();
        } catch (err: any) {
            return response.status(400).json({ error: err.message });
        }
    }

    static async update(request: any, response: any) {
        try {
            const body = request.request

            const contactService = new ContactService();

            const contact = await contactService.update(body);
            return response.json(contact);
        } catch (err: any) {
            return response.status(400).json({ error: err.message });
        }
    }
}
export default ContactController;