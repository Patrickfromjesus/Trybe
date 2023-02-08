// || -> string vazia e false em geral, incluindo zero.
// ?? -> estritamente null ou undefined.

const x = 0;
console.log(x || 'default');
console.log(x ?? 'default');