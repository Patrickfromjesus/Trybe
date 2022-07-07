function toLower(str, callback) {
  if(str === undefined || typeof str != 'string') return new Error('Deu erro');
  setTimeout(() => {
    return callback(str.toLowerCase());
  }, 2000);
}

module.exports = toLower;