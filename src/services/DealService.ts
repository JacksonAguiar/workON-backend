import {getRepository } from 'typeorm';
import Deal from '../models/deal';
import { IDeal } from '../models/interfaces';

class DealService {
    public async create(newDeal: IDeal): Promise<Deal> {
        const repository = getRepository(Deal);
        const deal = repository.create(newDeal);

        await repository.save(deal);

        return deal;
    }
}

export default DealService;