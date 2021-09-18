import 'reflect-metadata'
import express from 'express';
import routes from './routes';

import './database';

console.log("loading database...") 

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => { console.log("server loaded") });