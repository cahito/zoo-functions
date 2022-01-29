const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (!entrants) {
    return 0;
  }
  let crianca = 0;
  let adulto = 0;
  let velho = 0;
  entrants.forEach((element) => {
    if (element.age < 18) {
      crianca += 1;
    } else if (element.age < 50) {
      adulto += 1;
    } else {
      velho += 1;
    }
  });
  return { adult: adulto, child: crianca, senior: velho };
}

function calculateEntry(entrants) {
  // seguindo a dica do Rapha Martins de que objeto não é igual a objeto, resolvi usar Array.isArray
  if (!entrants || !Array.isArray(entrants)) {
    return 0;
  }
  const adulto = countEntrants(entrants).adult;
  const crianca = countEntrants(entrants).child;
  const velho = countEntrants(entrants).senior;
  return (adulto * 49.99) + (crianca * 20.99) + (velho * 24.99);
}

module.exports = { calculateEntry, countEntrants };

// const teste = [
//   { name: 'Gilmar1', age: 5 },
//   { name: 'Gilmar2', age: 5 },
//   { name: 'Gilmar3', age: 5 },
//   { name: 'Gilmar4', age: 18 },
//   { name: 'Gilmar5', age: 18 },
//   { name: 'Gilmar6', age: 50 },
// ];

// console.log(countEntrants(teste));
// console.log(calculateEntry({}));
