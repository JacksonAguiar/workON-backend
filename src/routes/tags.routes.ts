import { Router } from "express";
import TagController from '../controllers/TagController';

const tagRoutes = Router();

tagRoutes.post('/', TagController.create);
tagRoutes.delete('/:id', TagController.delete);

export default tagRoutes