import express from 'express';
import router from './routes/app.routes';
import './database/index';
import "reflect-metadata";

const path = require('path');
const ejs = require('ejs');
const app = express();
const port = 3333;

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../../../../views'))
app.use(express.static(path.join(__dirname, '../../../../views')))

const dataCertificate = {
  name: 'Keyllian Azevedo Quirino',
  course: 'Node Course',
  date: 'January 12, 2025',
  instructor: 'Max Milyano Quirino',
  hours: 40,
  identification: '18236214',
};

app.get('/certificate', (req, res) => {
  
  ejs.renderFile(path.join(__dirname,"../../../../views/index.ejs"), dataCertificate, (error: Error, certificate: string) => {
    if (error) {
      return res.json({message: 'Error reading file'});
    }
      return res.send(certificate);
    })
  })

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});