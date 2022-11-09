const validatePutPost = (req, res, next) => {
  const body = req.body;
  const arrBody = Object.keys(body);
  const validation = ['name', 'year', 'country', 'destination'];
  if (!arrBody.every((e) => validation.includes(e)) || validation.length !== arrBody.length) {
    return res.status(400).json({ message: 'Todos os campos devem estar preenchidos e possuir exatamente as mesmas chaves.' });
  }
  next();
}
module.exports = { validatePutPost };
