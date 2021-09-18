import { Router } from "express";
import DealController from '../controllers/DealController';

const dealRoutes = Router();

dealRoutes.post('/', DealController.create);

export default dealRoutes;