import "reflect-metadata";
import { errors } from 'celebrate';
import express from 'express';
import router from './routes/app.routes';
import './database/index';
import '@shared/container'

const app = express();
const port = 3333;

app.use(express.json());
app.use(router);

app.use(errors());

app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});