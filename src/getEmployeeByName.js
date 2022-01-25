const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  return employees.reduce((accumulator, currentValue) => {
    if (employeeName === currentValue.firstName || employeeName === currentValue.lastName) {
      return currentValue;
    }
    return accumulator;
  }, {});
}

module.exports = getEmployeeByName;
