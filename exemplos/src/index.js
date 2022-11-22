const express = require('express');

const app = express();
app.use(express.json());

app.listen(3002, () => console.log('Está open na 3002!'));

module.exports = app;
