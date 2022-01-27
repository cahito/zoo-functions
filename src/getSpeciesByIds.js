const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  return species.filter((bixo) => ids.some((id) => (id === bixo.id)));
}

// '78460a91-f4da-4dea-a469-86fd2b8ccc84'
// const acheBixo = (parametro) => species.find((bixo) => parametro === bixo.id);
// console.log(acheBixo('78460a91-f4da-4dea-a469-86fd2b8ccc84'));

// console.log(getSpeciesByIds('78460a91-f4da-4dea-a469-86fd2b8ccc84', '0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getSpeciesByIds;
