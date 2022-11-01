const express = require("express");
const { getAllChocos } = require('../cacauTrybe');

const app = express();

app.get('/chocolates/total', async (_req, res) => {
  try {
    const getChocos = await getAllChocos();
    res.status(200).json({ totalChocolates: getChocos.length }); 
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = app;