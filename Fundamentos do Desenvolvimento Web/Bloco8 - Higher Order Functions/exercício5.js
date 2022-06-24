const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, curr) => {
    for(let i = 0; i < curr.length; i++) {
      if (curr[i].toLowerCase() === 'a') acc++;
    }
    return acc;
  }, 0)
}
console.log(containsA());