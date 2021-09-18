import { Router } from 'express';
import Authentication from '../controllers/AuthController';

const authRoutes = Router();

authRoutes.post('/', Authentication.login);


export default authRoutes;