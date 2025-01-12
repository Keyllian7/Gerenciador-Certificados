import express from 'express';
import router from './routes/app.routes';
import './database/index';

const app = express();
const port = 3333;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});