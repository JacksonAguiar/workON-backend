import { getRepository, getManager } from 'typeorm';
import Contact from '../models/contact';
import ProAccount from './ProAccountService';
import User from '../models/user';
import { json } from 'express';

class ContactService {
    public async create({ user_id, seen, pro_id, project_id }: any): Promise<any> {
        const repository = getRepository(Contact);

        const contact = repository.create({ user_id, seen, pro_id, project_id });
        await repository.save(contact);

        return contact;
    }
    public async get({ user_id }: any): Promise<any> {
        const repository = getRepository(Contact);

        if (user_id) {
            return await repository.createQueryBuilder('contact')
                .where([{ user_id: user_id }, { pro_id: user_id }])
                .select(['contact.id', 'contact.seen', 'project.id', 'project.title',
                    'project.category', 'user.id', 'user.name', 'user.profile_img',
                    'pro.name', 'pro.profile_img', 'pro.id'])
                .innerJoin('contact.project', 'project')  // bar is the joined table
                .innerJoin('contact.user', 'user')  // bar is the joined table
                .innerJoin('contact.pro_account', 'pro')
                .getMany();

        }

        return await repository.find();
    }
    public async update(body: any): Promise<void> {
        const repository = getRepository(Contact);

        if (body.id == null)
            throw Error("contact 'ID' required");

        const contact = await this.get(body.id);

        repository.merge(contact, body);

        const res = await repository.save(contact);

        return res;
    }
}
export default ContactService;