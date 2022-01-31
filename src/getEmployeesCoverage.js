const data = require('../data/zoo_data');

const { species, employees } = data;

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

const employeesIds = [
  'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
  burlId,
  olaId,
  '56d43ba3-a5a7-40f6-8dd7-cbb05082383f',
  stephanieId,
  '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
  'c1f50212-35a6-4ecd-8223-f835538526c2',
  'b0dc644a-5335-489b-8a2c-4e086c7819a2',
];

const getSpecies = (dude) => dude.responsibleFor
  .map((bixo) => species.filter((quem) => quem.id === bixo)[0].name);

const getLocations = (animals) => species.filter((bixo) => (animals.includes(bixo.id)))
  .map((ind) => ind.location);

const padrao = () => employees.map((ind) => {
  const result = {
    id: ind.id,
    fullName: `${ind.firstName} ${ind.lastName}`,
    species: getSpecies(ind),
    locations: getLocations(ind.responsibleFor),
  };
  return result;
});

const getEmployeeByName = (param) => padrao().find((ind) =>
  (ind.fullName.includes(param.name)));

const getEmployeeById = (param) => padrao().find((ind) => (param.id === ind.id));

function getEmployeesCoverage(object) {
  try {
    if (!object) {
      return padrao();
    }
    if (object.name) {
      return getEmployeeByName(object);
    }
    if (employeesIds.includes(object.id)) {
      return getEmployeeById(object);
    }
    throw new Error('Informações inválidas');
  } catch (error) {
    throw error.message;
  }
}

module.exports = getEmployeesCoverage;

// console.log(getEmployeesCoverage({ name: 'Nigel' }));
// console.log(getEmployeesCoverage({ name: 'Bethea' }));
// console.log(getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));
// console.log(getEmployeesCoverage());
// console.log(getEmployeesCoverage({ id: 'errado' }));
