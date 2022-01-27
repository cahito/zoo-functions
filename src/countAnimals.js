const data = require('../data/zoo_data');

const total = {
  lions: 4,
  tigers: 2,
  bears: 3,
  penguins: 4,
  otters: 4,
  frogs: 2,
  snakes: 2,
  elephants: 4,
  giraffes: 6,
};

const acheBixo = (parametro) => data.species.find(({ name }) => parametro.specie === name);

function countAnimals(animal) {
  if (!animal) {
    return total;
  }
  if (!animal.sex) {
    return acheBixo(animal).residents.length;
  }
  return acheBixo(animal).residents.reduce((ac, cu) => ((cu.sex === animal.sex) ? ac + 1 : ac), 0);
}

module.exports = countAnimals;

// reduce((acc, cur) => ((acc !== cur) ? acc + 1 : acc), 0)

// console.log(countAnimals({ specie: 'otters', sex: 'male' }));

// let teste = { test1: 'coisa', test2: 'nenhuma' };

/* function imprime(algo) {
  if (algo.test1 === 'coisa') {
    console.log('deu certo');
  } else {
    console.log('não foi dessa vez...');
  }
}

imprime({ test1: 'coisa', test2: 'nenhuma' }); */
