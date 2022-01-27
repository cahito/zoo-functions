const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.find((bicho) => {
    if (animal === bicho['name']) {
      return bicho;
    }
    return 'What?';
  });
}

module.exports = getAnimalsOlderThan;

console.log(getAnimalsOlderThan('tigers', 7));
