const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  return species.find((bixo) => (animal === bixo.name)).residents.every((ind) => (ind.age > age));
}

module.exports = getAnimalsOlderThan;

// .residents.every((indiv) => (indiv.age > age))
// console.log(getAnimalsOlderThan('otters', 7));
