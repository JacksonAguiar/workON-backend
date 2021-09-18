import { getRepository } from 'typeorm';
import { IProject } from '../models/interfaces';
import Project from '../models/project';
import UserService from './UserService';

class ProjectService {
    public async create(newProject: IProject): Promise<Project> {
        const repository = getRepository(Project);
        // const service = new UserService();
        // const user = await service.get(newProject.owner_id);
        // newProject.owner_id = user.id;
        console.log(newProject);
        const project = repository.create(newProject);

        await repository.save(project);

        return project;
    }
    public async get(id?: any): Promise<any> {
        const repository = getRepository(Project);

        if (id)
            return await repository.findOne(id, { relations: ["owner"] });

        return await repository.find({ where: { team: false }, relations: ["proAccount", "owner"] });
    }
    public async delete(id?: any): Promise<any> {
        const repository = getRepository(Project);


        return await repository.delete({ id: id });

    }
    public async update(upProject: IProject, id: any): Promise<any> {
        const repository = getRepository(Project);
        const project = await this.get(id);
        repository.merge(project, upProject);
        const res = await repository.save(project);

        return res;
    }
}

export default ProjectService;