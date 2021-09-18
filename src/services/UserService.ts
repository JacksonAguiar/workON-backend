import User from '../models/user';
import { getRepository } from 'typeorm';
import { IUser } from '../models/interfaces';


class UserService {
    public async create(newUser: IUser): Promise<any> {

        const repository = getRepository(User);//MODEL

        const uid = newUser.uid;
        const user = await this.get(uid);
        console.log(user);
        if (user) {
            console.log("returning user..")
            return user;
        }
        console.log("creating new user..")
        const newuser = repository.create(newUser);

        await repository.save(newuser);

        return newuser;

    }
    public async get(uid?: any): Promise<any> {

        const repository = getRepository(User);//MODEL

        if (uid)
            return await repository.findOne({ where: { uid }, relations: ["projects", "proAccount"] }) || null;
        return await repository.find() || null;

    }
    public async getImg(id: any): Promise<any> {

        const repository = getRepository(User);//
        return await repository.createQueryBuilder('users')
            .where({ id: id })
            .select(['users.profile_img'])
            .getOne();

    }
    public async update(newUser: IUser): Promise<any> {

        const repository = getRepository(User);//MODEL
        const user = await this.get(newUser.uid);

        repository.merge(user, newUser);

        await repository.save(user);
        return true;
    }
}

export default UserService;