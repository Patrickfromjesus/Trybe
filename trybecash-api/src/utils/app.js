const express = require('express');
const morgan = require('morgan');
const missionsRouter = require('../routers/missionsRouters.router');

const app = express();

app.use(morgan());
app.use(express.json());
app.use('/missions', missionsRouter);

module.exports = app;
