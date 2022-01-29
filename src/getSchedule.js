const data = require('../data/zoo_data');

const { species, hours } = data;
const weekday = Object.keys(hours);
const animals = species.map((bixo) => bixo.name);
const abre = (parameter) => hours[parameter].open;
const fecha = (parameter) => hours[parameter].close;
const quem = (parameter) => species.filter((bixo) => bixo.availability
  .includes(parameter)).map((ind) => `${ind.name}`);

function daily(parameter) {
  const result = {};
  result[parameter] = {
    officeHour: `Open from ${abre(parameter)}am until ${fecha(parameter)}pm`,
    exhibition: quem(parameter),
  };
  return result;
}

function dia(parameter) {
  if (parameter === 'Monday') {
    return {
      Monday: {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      },
    };
  }
  return daily(parameter);
}

const horario = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'snakes', 'elephants'],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};
// console.log(animals);
// const quem = species.filter(({ name, availability }) => (availability.includes(scheduleTarget) ? name : ''));
/* function horario() {
  const total = {};
  weekday.forEach((day) => {
    total.dia(day);
  });
  return total;
} */
// console.log(horario());

// .includes() acrescentado com a dica do Rapha Martins
function getSchedule(scheduleTarget) {
  if (animals.includes(scheduleTarget)) {
    return species.find((bixo) => bixo.name === scheduleTarget).availability;
  }
  if (weekday.includes(scheduleTarget)) {
    return dia(scheduleTarget);
  }
  return horario;
}

module.exports = getSchedule;

// console.log(getSchedule('Wednesday'));
// console.log(getSchedule('otters'));
// console.log(getSchedule());
// console.log(getSchedule('E você, quem é?'));
