
import { Router } from "express";
import ProAccountController from '../controllers/ProAccountController';

const proaccountRoutes = Router();

proaccountRoutes.post('/', ProAccountController.create);
proaccountRoutes.get('/:id?', ProAccountController.getUser);

export default proaccountRoutes;