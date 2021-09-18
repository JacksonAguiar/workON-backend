import { Router } from 'express';

import addressRoutes from './address.routes';
import authRoutes from './auth.routes';
import certRoutes from './certification.routes';
import contactRoutes from './contact.routes';
import dealRoutes from './deal.routes';
import mediaRoutes from './media.routes';
import proaccountRoutes from './proaccount.routes';
import projectRoutes from './project.routes';
import tagRoutes from './tags.routes';
import userRoutes from './user.routes';

const routes = Router();

routes.use("/address", addressRoutes);
routes.use("/auth", authRoutes);
routes.use("/certifications", certRoutes);
routes.use("/contacts", contactRoutes);
routes.use("/deals", dealRoutes);
routes.use("/meadias", mediaRoutes);
routes.use("/proaccount", proaccountRoutes);
routes.use("/projects", projectRoutes);
routes.use("/tags", tagRoutes);
routes.use("/users", userRoutes);



export default routes;