const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const firstBixo = employees.find((ind) => (ind.id === id)).responsibleFor[0];
  const especie = species.find((qual) => (firstBixo === qual.id));
  const quem = especie.residents.reduce((acc, cur) => ((acc.age > cur.age) ? acc : cur));
  return [quem.name, quem.sex, quem.age];
}

module.exports = getOldestFromFirstSpecies;

// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
