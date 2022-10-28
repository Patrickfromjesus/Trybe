function makePromise(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number') (
      reject(new Error('Informe apenas números')));
    const value = (a + b) * c;
    value < 50 ? reject(new Error('Valor muito baixo')) : resolve(value);
  })
}

const makeFuc = async () => {
  try {
    console.log(await makePromise(20, 'a', 3));
  } catch(err) {
    console.error(err.message);
  }
}

makeFuc();
