import { getRepository } from 'typeorm';
import Message from '../models/message';

class MessageService {
    public async create({text, sent, to, contact_id}: any): Promise<any> {
        const repository = getRepository(Message);

        const message = repository.create({text, sent, to, contact_id});
        await repository.save(message);

        return message;
    }
    public async get({ id }: any): Promise<any> {
        const repository = getRepository(Message);

        if (id)
            return await repository.findOne({ where: { id } });

        return await repository.find();
    }
}
export default MessageService;