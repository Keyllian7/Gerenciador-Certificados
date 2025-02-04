import "reflect-metadata";
import express from 'express';
import router from './routes/app.routes';
import './database/index';
import '@shared/container'
import { globalErrorHandler } from "@shared/errors/GlobalErrorHandler";

const app = express();
const port = 3333;

app.use(express.json());
app.use(router);

app.use(globalErrorHandler)

app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});