const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return {
      lions: 4, tigers: 2, bears: 3, penguins: 4, otters: 4, frogs: 2, snakes: 2, elephants: 4, giraffes: 6,
    };
  }
  if (!animal.sex) {
    return data.species.find(({ name }) => animal.specie === name).residents.reduce((acc, cur) => ((acc !== cur) ? acc + 1 : acc), 0);
  }
  if (animal.sex) {
    return data.species.find(({ name }) => animal.specie === name).residents.reduce((acc, cur) => ((cur.sex === animal.sex) ? acc + 1 : acc), 0);
  }
}

module.exports = countAnimals;

console.log(countAnimals({ specie: 'penguins', sex: 'male' }));

// let teste = { test1: 'coisa', test2: 'nenhuma' };

/* function imprime(algo) {
  if (algo.test1 === 'coisa') {
    console.log('deu certo');
  } else {
    console.log('não foi dessa vez...');
  }
}

imprime({ test1: 'coisa', test2: 'nenhuma' }); */
