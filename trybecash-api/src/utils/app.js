const express = require('express');
const missionsRouter = require('../routers/missionsRouters.router');

const app = express();

app.use(express.json());
app.use('/missions', missionsRouter);

module.exports = app;
