const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  return employees.reduce((acc, cur) => {
    if (employeeName === cur.firstName || employeeName === cur.lastName) {
      return cur;
    }
    return acc;
  }, {});
}

module.exports = getEmployeeByName;
