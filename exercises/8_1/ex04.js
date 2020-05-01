const habs = [
  'Java',
  'JavaScript',
  'HTML',
  'Excel',
  'Matemática'
];

const replaceStr = str => {
  let frase = 
`Tryber x aqui!
Tudo bem?`;
  frase = frase.replace('x', str);
  return frase;
};

const txt = 'Rangel';
console.log(replaceStr(txt));