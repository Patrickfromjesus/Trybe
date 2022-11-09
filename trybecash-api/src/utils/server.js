require('dotenv').config(); //TEM QUE SER ANTES DO REQUIRE DO APP!
const app = require('./app');

const PORT = 3001;

app.listen(PORT, async () =>  console.log(`Valor da variável de ambiente $USER: ${process.env.USER}`));

