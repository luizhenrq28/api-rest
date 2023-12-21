import express from 'express';
import { router } from './routes';
import 'dotenv/config';

//criando aplicacao express
const app = express();

//passando as rotas para o express
app.use(express.json());
app.use(router);


//jogando a aplicacao com o server configurado para o index.ts
export { app };