import { getRepository } from 'typeorm';
import Address from '../models/address';
import { IAddress } from '../models/interfaces';
import UserService from './UserService';
class AddressService {
    public async create(newAddress: IAddress): Promise<Address> {
        const repository = getRepository(Address);
        const userService = new UserService();
        let user  = await userService.get(newAddress.user_id);
       
        if (!user) {
            throw Error("User not found");
        }
        
        newAddress.user_id = user.id;

        const address = repository.create(newAddress);

        await repository.save(address);

        return address;
    }
}

export default AddressService;