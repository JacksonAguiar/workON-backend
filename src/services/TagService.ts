import { getRepository } from 'typeorm';
import Tag from '../models/tag';
import ProAccountService from './ProAccountService';
import UserService from './UserService';



class TagService {
    public async create({ pro_id, name }: any): Promise<Tag> {

        const repository = getRepository(Tag);

        const userService = new ProAccountService();
        const user: any = await userService.getUserPro(pro_id);
        pro_id = user.id;

        const tag = repository.create({ pro_id, name });

        await repository.save(tag);

        // return await this.get(tag.pro_id, null);
        return tag;
    }
    public async delete(id: any): Promise<any> {
        const repository = getRepository(Tag);

        await repository.delete({ id: id });

        console.log(`deleting ${id}...`);

        return true;
    }
    public async get(pro_id?: any, id?: any,): Promise<any> {
        const repository = getRepository(Tag);
        if (id)
            return await repository.find({ where: id });

        return await repository.find({ where: { pro_id: pro_id } });

    }
}

export default TagService;