const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whilelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whilelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  }
}
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hola mi gente bella');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Llegue por otra ruta :v');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
//app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port is: ' + port);
});
