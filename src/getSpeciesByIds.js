const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids === []) {
    return [];
  }
  return data.species.filter((bixo) => ids.forEach((id) => {
    if (id === bixo.id) {
      return bixo;
    }
  }));
}

// '78460a91-f4da-4dea-a469-86fd2b8ccc84'
console.log(getSpeciesByIds('78460a91-f4da-4dea-a469-86fd2b8ccc84',
  'e8481c1d-42ea-4610-8e11-1752cfc05a46'));

module.exports = getSpeciesByIds;
















// function getSpeciesByIds(...idsArgs) {

//   return species.filter((filterSpecies) => idsArgs.includes(filterSpecies.id));
//   }

// function getSpeciesByIds(...ids) {
//   return species.filter((specie) => ids.some((id) => specie.id === id));
//   }
