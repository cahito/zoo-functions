const data = require('../data/zoo_data');

const { species } = data;

// padrao feito com reduce baseado no video https://www.youtube.com/watch?v=O_bSjsLga48 , indicado por Yuut
/* const arrayTeste = [
  { nome: 'objA', local: 'NE', carac: 'A' },
  { nome: 'objB', local: 'CO', carac: 'B' },
  { nome: 'objC', local: 'SE', carac: 'C' },
  { nome: 'objD', local: 'SE', carac: 'D' },
  { nome: 'objE', local: 'NE', carac: 'E' },
];
const teste = () => arrayTeste.reduce((acc, cur) => {
  acc[cur.local] = acc[cur.local] || [];
  acc[cur.local].push(cur.carac);
  return acc;
}, {});
teste(); */

const padrao = () => species.reduce((acc, cur) => {
  acc[cur.location] = acc[cur.location] || [];
  acc[cur.location].push(cur.name);
  return acc;
}, {});

const comNomes = () => species.reduce((acc, cur) => {
  acc[cur.location] = acc[cur.location] || [];
  acc[cur.location].push(cur.residents.reduce((ac2, cu2) => {
    const ac3 = ac2;
    ac3[cur.name] = ac3[cur.name] || [];
    ac3[cur.name].push(cu2.name);
    return ac3;
  }, {}));
  return acc;
}, {});

const completo = (parameter) => species.reduce((acc, cur) => {
  acc[cur.location] = acc[cur.location] || [];
  acc[cur.location].push(cur.residents.reduce((ac2, cu2) => {
    const select = cur.residents.filter((bixo) => (bixo.sex === parameter.sex));
    const aCc = ac2;
    aCc[cur.name] = aCc[cur.name] || [];
    // estrutura de função interna com ajuda de Sheila Nakashima
    const nomeSexo = () => {
      if (select.includes(cu2)) {
        return aCc[cur.name].push(cu2.name);
      }
    };
    nomeSexo();
    aCc[cur.name].sort();
    return aCc;
  }, {}));
  return acc;
}, {});

const comSort = () => species.reduce((acc, cur) => {
  acc[cur.location] = acc[cur.location] || [];
  acc[cur.location].push(cur.residents.reduce((ac2, cu2) => {
    const acs = ac2;
    acs[cur.name] = acs[cur.name] || [];
    acs[cur.name].push(cu2.name);
    acs[cur.name].sort();
    return acs;
  }, {}));
  return acc;
}, {});

const comSex = (parameter) => species.reduce((acc, cur) => {
  acc[cur.location] = acc[cur.location] || [];
  acc[cur.location].push(cur.residents.reduce((ac2, cu2) => {
    const select = cur.residents.filter((bixo) => (bixo.sex === parameter.sex));
    const acS = ac2;
    acS[cur.name] = acS[cur.name] || [];
    // estrutura de função interna com ajuda de Sheila Nakashima
    const nomeSexo = () => {
      if (select.includes(cu2)) {
        return acS[cur.name].push(cu2.name);
      }
    };
    nomeSexo();
    return acS;
  }, {}));
  return acc;
}, {});
// .filter((bixo) => bixo.sex === parameter.sex)
const comVariacao = (parameter) => {
  if (parameter.sex && !parameter.sorted) {
    return comSex(parameter);
  }
  if (parameter.sorted && !parameter.sex) {
    return comSort();
  }
  return completo(parameter);
};

// console.log(padrao());

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return padrao();
  }
  if (options.sex || options.sorted) {
    return comVariacao(options);
  }
  return comNomes();
}

// não sei o que escrever ainda
// {
//   NE: ['lions', 'giraffes'],
//   NW: ['tigers', 'bears', 'elephants'],
//   SE: ['penguins', 'otters'],
//   SW: ['frogs', 'snakes'],
// }
module.exports = getAnimalMap;

// console.log(getAnimalMap());
// console.log(getAnimalMap({ sex: 'female' }));
// console.log(getAnimalMap({ sex: 'female', sorted: true }));
// console.log(getAnimalMap({ includeNames: true }));
// console.log(getAnimalMap({ includeNames: true, sorted: true }));
// console.log(getAnimalMap({ includeNames: true, sex: 'female' }));
// console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }));
