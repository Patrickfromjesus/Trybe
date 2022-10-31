const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const moviesPath = path.resolve(__dirname, '../movies.json');

app.use(express.json());

async function readSomething() {
  try {
    const data = await fs.readFile(moviesPath);
    return JSON.parse(data);
  } catch(err) {
    console.error(err);
  }
}

/* app.get('/movies/:id', async (req, res) => {
  try{
    const id = req.params;
    const moviesData = await readSomething();
    const movies = moviesData.find((movie) => movie.id === Number(id));
    if (!movies) res.status(404).send({ message: 'id Not Found!' });
    res.status(200).json({ movies });
  } catch(error) {
    res.status(500).send({ message: err.message });
  }
}); */

/* app.get('/movies', async (req, res) => {
  try {
    const movies = await readSomething();
    res.status(200).json({ movies });
  } catch(err) {
    res.status(500).send({ message: err.message });
  }
}); */

/* app.post('/movies', async (req, res) => {
  try {
    const data = await readSomething();
    const newMovie = { id: data.length + 1, ...req.body };
    const allMovies = JSON.stringify([...data, newMovie]);
    await fs.writeFile(moviesPath, allMovies); //Para quando forfazer mais modificações as alterações ficarem salvas.
    res.status(201).json(newMovie);
  } catch(err) {
    res.status(500).send({ message: err.message });
  }
}); */

/* app.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movie = req.body;
    const movies = await readSomething();
    const index = movies.findIndex((e) => e.id === Number(id));
    movies[index] = { id: Number(id), ...movie };
    const modifiedMovie = JSON.stringify(movies);
    await fs.writeFile(moviesPath, modifiedMovie);
    res.status(200).json(movies[index]);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}); */

/* app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await readSomething();
    const filtered = movies.filter((movie) => movie.id !== Number(id));
    const change = JSON.stringify(filtered);
    await fs.writeFile(moviesPath, change);
    res.status(204).end();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}); */

app.get('/movies/search', async (req, res) => {
  try {
    const { q } = req.query;
    const movies = await readSomething();
    if(!q) res.status(200).end();
    const filtered = movies.filter(({ movie }) => movie.toLowerCase().includes(q.toLowerCase()));
    const jsoned = JSON.stringify(filtered);
    res.status(200).json(jsoned); 
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = app;
