import { getRepository } from 'typeorm';
import Certification from '../models/certification';
import { ICertification } from '../models/interfaces';
import ProAccountService from './ProAccountService';

class CertificationService {
    public async create(certification: ICertification): Promise<any> {
        const repository = getRepository(Certification);

        const userServ = new ProAccountService();

        let user: any = await userServ.getUserPro(certification.pro_id);

        certification.pro_id = user.id;

        const certificationRepo = repository.create(certification);

        await repository.save(certificationRepo);

        // return await this.get(certificationRepo.pro_id);
        return certificationRepo;
    }
    public async delete(id: any): Promise<any> {

        const repository = getRepository(Certification);

        await repository.delete({ id: id });

        return true;
    }
    public async get(pro_id: any, id?: any,): Promise<any> {
        const repository = getRepository(Certification);
        if (id)
            return await repository.find({ where: id });

        return await repository.find({ where: { pro_id: pro_id } });

    }
}

export default CertificationService;