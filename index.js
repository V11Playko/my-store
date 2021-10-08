const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola mi gente bella');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Llegue por otra ruta :v');
});

routerApi(app);

app.listen(port, () => {
  console.log('Mi port is: ' + port);
});
