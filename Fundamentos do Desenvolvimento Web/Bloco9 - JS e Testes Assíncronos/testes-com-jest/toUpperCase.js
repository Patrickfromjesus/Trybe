const uppercase = (str, callback) => {
  if(typeof(str) == 'undefined') return ('Insira apenas caracteres válidos, do tipo string.');
  setTimeout(() => {
    callback(str.toLowerCase());
  }, 500);
};
module.exports = uppercase;