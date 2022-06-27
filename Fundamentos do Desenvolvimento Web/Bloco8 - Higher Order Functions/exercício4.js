//Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];


function filterPeople(...args) {  //rest parameter.
  return args.filter(person => {
    const {bornIn, nationality} = person;  //destructuring object.
    return (nationality === 'Australian' && bornIn > 1900 && bornIn < 2001);
  })
}
console.log(filterPeople(...people)); //spread operator.
