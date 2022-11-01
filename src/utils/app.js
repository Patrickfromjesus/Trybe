const express = require("express");
const { getAllChocos, getAllBrands, writeCacauTrybe } = require('../cacauTrybe');
const fs = require('fs').promises;
const path = require('path');

const PATH_NAME = path.resolve(__dirname, '../trybeChoco.json');

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

app.put('/chocolates/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, brandId } = req.body;
    const chocos = await getAllChocos();
    const brands = await getAllBrands();
    const index = chocos.findIndex((choco) => choco.id === Number(id));
    chocos[index] = { id: Number(id), name, brandId };
    await writeCacauTrybe({ ...brands, chocolates: chocos });
    res.status(200).json({ chocolates: chocos[index] });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = app;
