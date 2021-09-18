import { IProject } from "../models/interfaces";
import ProjectService from "../services/ProjectService";

class ProjectController {
    static async create(request: any, response: any){
        try {
            const body: IProject = request.body;
            const projectService = new ProjectService();
            const project = await projectService.create(body);
            return response.json(project);
        } catch (err: any) {
            return response.status(400).json({error: err.message});
        }
    }
    static async update(request: any, response: any){
        try {
            const body: IProject = request.body;
            const {id} = request.body;
            const projectService = new ProjectService();
            const project = await projectService.update(body, id);
            return response.json(project);
        } catch (err: any) {
            return response.status(400).json({error: err.message});
        }
    }
    static async get(request: any, response: any){
        try {
            const {id} = request.params;
            const projectService = new ProjectService();
            const project = await projectService.get(id);
            console.log(project);
            return response.json(project);
        } catch (err: any) {
            return response.status(400).json({error: err.message});
        }
    }
    static async delete(request: any, response: any){
        try {
            const {id} =  request.params;
            const projectService = new ProjectService();
            const project = await projectService.delete(id);
            return response.json(project);
        } catch (err: any) {
            return response.status(400).json({error: err.message});
        }
    }
    static async search(request: any, response: any){
        try {
            const body: IProject = request.body;
            
            const projectService = new ProjectService();
            const project = await projectService.create(body);
            return response.json(project);
        } catch (err: any) {
            return response.status(400).json({error: err.message});
        }
    }

}
export default ProjectController;