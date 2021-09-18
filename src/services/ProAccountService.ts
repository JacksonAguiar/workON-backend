import { getConnection, getRepository } from 'typeorm';
import { IProAccount } from '../models/interfaces';
import ProAccount from '../models/proAccount';
import UserService from './UserService';
class ProAccountService {


    public async create(newProAccount: IProAccount): Promise<ProAccount> {
        const repository = getRepository(ProAccount);

        const userService = new UserService();
        let user = await userService.get(newProAccount.user_id);

        if (!user) {
            throw Error("User not found");
        }

        let pro_user = await this.getUserPro(user.uid)

        if (pro_user) {
            return pro_user;
        }
        newProAccount.user_id = user.id;
        const proAccount = repository.create(newProAccount);
        await repository.save(proAccount);
        user.type = "PRO";
        user.register_done = true;
        await userService.update(user);
        return proAccount;
    }
    public async getUserPro(id?: any): Promise<any> {
        const userService = new UserService();
        const repository = getRepository(ProAccount);


        if (id) {
            // let user = await userService.get(_id);
            // const id = user.id;
            const pro = await repository.findOne({ where: { id: id }, relations:["user"]}) || null;

            // if (!pro) {
            //     throw Error("User pro not found");
            // }
            return pro;
        } else {

            return await repository.find( {relations:["user"]});

        }
    }
    public async update(newProAccount: IProAccount, id: any): Promise<void> {
        const repository = getRepository(ProAccount);

        await repository.update({ user_id: id }, newProAccount);

    }
    public async filter(query: any[], id?: any, user_id?: any): Promise<any> {
        const repository = getRepository(ProAccount);

        return await repository.createQueryBuilder('proAccounts')
        .where([{ user_id: user_id }, { id: id}])
        .select(query) 
        .getOne();

    }
}

export default ProAccountService;