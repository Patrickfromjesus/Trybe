const express = require("express");
require('express-async-errors');
const morgan = require('morgan');
const teamsRouter = require('../routers/teams.router');
const apiCredentials = require('../middlewares/apiCredentials');

const app = express();

app.use(express.json()); //Ele que cria o req.body.
app.use(apiCredentials);
app.use(morgan('dev'));
app.use(express.static('src'));
app.use(teamsRouter); //SEMPRE NO FINAL, SENÃO NÃO PEGA OS APP.USE DE CIMA

module.exports = app;
