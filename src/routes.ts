import { Router } from 'express';
import { convertRouter } from './features/convert/convert.router';

const routes = Router();
routes.use('/convert', convertRouter);

export default routes;