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

app.get('/chocolates/search', async (req, res) => {
  try {
    const chocolates = await getAllChocos();
    const { name } = req.query;
    const chocos = chocolates.filter((choco) => choco.name
      .toLowerCase().includes(name.toLowerCase()));
      if (chocos.length === 0) res.status(404).json([]);
    res.status(200).json(chocos); 
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = app;