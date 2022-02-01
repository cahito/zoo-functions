const data = require('../data/zoo_data');

const { species } = data;
const acheBixo = (parametro) => species.find(({ name }) => parametro.specie === name);
const totalCada = (para) => acheBixo({ specie: para }).residents.length;

const total = {
  lions: totalCada('lions'),
  tigers: totalCada('tigers'),
  bears: totalCada('bears'),
  penguins: totalCada('penguins'),
  otters: totalCada('otters'),
  frogs: totalCada('frogs'),
  snakes: totalCada('snakes'),
  elephants: totalCada('elephants'),
  giraffes: totalCada('giraffes'),
};

function countAnimals(animal) {
  if (!animal) {
    return total;
  }
  if (!animal.sex) {
    return acheBixo(animal).residents.length;
  }
  return acheBixo(animal).residents
    .reduce((acc, cur) => ((cur.sex === animal.sex) ? acc + 1 : acc), 0);
}

module.exports = countAnimals;

// reduce((acc, cur) => ((acc !== cur) ? acc + 1 : acc), 0)

// console.log(countAnimals({ specie: 'penguins', sex: 'male' }));

// let teste = { test1: 'coisa', test2: 'nenhuma' };

/* function imprime(algo) {
  if (algo.test1 === 'coisa') {
    console.log('deu certo');
  } else {
    console.log('não foi dessa vez...');
  }
}

imprime({ test1: 'coisa', test2: 'nenhuma' }); */
