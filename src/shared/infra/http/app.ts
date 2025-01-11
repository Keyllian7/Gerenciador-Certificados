import express from 'express';
import router from './routes/app.routes';

const app = express();
const port = 8081;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});