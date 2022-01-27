const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  return employees.find((ind) => (employeeName === ind.firstName || employeeName === ind.lastName));
}

module.exports = getEmployeeByName;

/* return employees.reduce((acc, cur) => {
  if (employeeName === cur.firstName || employeeName === cur.lastName) {
    return cur;
  }
  return acc;
}, {}); */
// console.log(getEmployeeByName('Stephanie'));
