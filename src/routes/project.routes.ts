
import { Router } from "express";
import ProjectController from '../controllers/ProjectController';

const projectRoutes = Router();

projectRoutes.post('/', ProjectController.create);
projectRoutes.delete('/:id', ProjectController.delete);
projectRoutes.get('/:id?', ProjectController.get);

export default projectRoutes;