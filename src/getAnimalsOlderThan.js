const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.some((bixo) => {
    if (animal === bixo.name) {
      return bixo.every(({ residents }) => {
        if (age >= residents.age);
      });
    }
  });
}

module.exports = getAnimalsOlderThan;

console.log(getAnimalsOlderThan('lion', 2));
