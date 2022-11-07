const app = require('./app');
require('dotenv').config();

const PORT = 3001;

app.listen(PORT, async () =>  console.log(`Valor da variável de ambiente $USER: ${process.env.USER}`));

