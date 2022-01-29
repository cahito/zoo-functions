const data = require('../data/zoo_data');

const { employees } = data;

// function getEmployeeByName(employeeName) {
//   return employees.find((ind) => (employeeName === ind.firstName || employeeName === ind.lastName));
// }
const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managers = [stephanieId, olaId, burlId];

// const acharID = (parameter) => employees.find((ind) => ind.id === parameter);
// acharID(managerId);

function isManager(id) {
  return employees.some(() => (managers.includes(id)));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.filter((person) => (person.managers.includes(managerId)))
    .map((ind) => `${ind.firstName} ${ind.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };

// '56d43ba3-a5a7-40f6-8dd7-cbb05082383f'
// 'fdb2543b-5662-46a7-badc-93d960fdc0a8'
// console.log(isManager());
// console.log(getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
