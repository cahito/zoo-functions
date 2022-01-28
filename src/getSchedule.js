const data = require('../data/zoo_data');

const { species, hours } = data;
const weekday = Object.keys(hours);
const animals = species.map((bixo) => bixo.name);

// const quem = species.filter(({ name, availability }) => (availability.includes(scheduleTarget) ? name : ''));
/* const horario = weekday.forEach((dia) => {
  return {
    dia: {
      officeHour: `Open from ${abre}am until ${fecha}pm`,
      exhibition: species.filter((bixo) => bixo.availability.includes(dia)),
    },
  };
}); */
// console.log(abre);

// .includes() acrescentado com a dica do Rapha Martins
function getSchedule(scheduleTarget) {
  if (animals.includes(scheduleTarget)) {
    return 'Não sei ainda';
  }
  if (weekday.includes(scheduleTarget)) {
    const abre = hours[scheduleTarget].open;
    const fecha = hours[scheduleTarget].close;
    const quem = species.filter((bixo) => {
      if (bixo.availability.includes(scheduleTarget)) {
        return bixo.name;
      } });
    return {
      scheduleTarget: {
        officeHour: `Open from ${abre}am until ${fecha}pm`,
        exhibition: quem,
      },
    };
  }
  return horario;
}

module.exports = getSchedule;

console.log(getSchedule('Tuesday'));
// console.log(getSchedule('otters'));
// console.log(getSchedule());
// console.log(getSchedule('E você, quem é?'));
