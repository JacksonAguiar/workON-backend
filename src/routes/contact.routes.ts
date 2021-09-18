import { Router } from "express";
import ContactController from '../controllers/ContactController';
import MessageController from '../controllers/MessageController';

const contactRoutes = Router();

contactRoutes.post('/', ContactController.create);
contactRoutes.get('/:user_id?', ContactController.get);
contactRoutes.put('/:id?', ContactController.update);
contactRoutes.post('/messages', MessageController.create);
contactRoutes.get('/messages', MessageController.get);


export default contactRoutes;