import { Router } from "express";
import CertificationController from '../controllers/CertificationController';

const certRoutes = Router()

certRoutes.post('/', CertificationController.create);
certRoutes.delete('/:id', CertificationController.delete);

export default certRoutes;