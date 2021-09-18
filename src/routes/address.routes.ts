import { Router } from "express";
import AddressController from '../controllers/AddressController';

const addressRoutes = Router();
addressRoutes.post('/', AddressController.create);

export default addressRoutes;