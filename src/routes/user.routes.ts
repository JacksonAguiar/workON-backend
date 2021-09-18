import { Router } from "express";
import UserControler from '../controllers/UserController';

const userRoutes = Router();

userRoutes.post('/', UserControler.create);
userRoutes.get('/img/:id', UserControler.getImage);
userRoutes.get('/:uid', UserControler.getUser);

export default userRoutes;