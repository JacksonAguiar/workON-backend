import { Router } from 'express';
import MediaController from '../controllers/MediaController';

const mediaRoutes = Router();

mediaRoutes.post('/', MediaController.create);

export default mediaRoutes;