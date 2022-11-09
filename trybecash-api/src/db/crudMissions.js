const connection = require('./connection');

const read = (id) => {
  if (!id) {
    return connection.execute('SELECT * FROM missions');
  }
  return connection.execute('SELECT * FROM missions WHERE id = ?', [id]);
}

const insert = (missions) => {
  return connection.execute(`
  INSERT INTO missions (name, year, country, destination)
  VALUES (?, ?, ?, ?)`,
  [missions.name, missions.year, missions.country, missions.destination]);
};

const update = ({ name, year, country, destination }, id) => {
  return connection.execute(`
  UPDATE missions SET name = ?, year = ?, country = ?, destination = ? WHERE id = ?`,
  [name, year, country, destination, id]);
}

const remove = (id) => {
  return connection.execute(`DELETE FROM missions WHERE id = ?`, [id]);
}

module.exports = {
  read,
  insert,
  update,
  remove,
};
