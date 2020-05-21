const fazAlgo = algo => console.log(algo * 2);

const errinho = () => console.log('Um pequeno erro ocorreu!');

const random = () => parseInt(Math.random() * 50);

const elevaNum = arr => arr.map(i => i * i);

const geraArray = () => {
  let array = [];
  for (let i = 0; i < 10; i += 1) {
    array[i] = random();
  }
  return elevaNum(array);
};

const myPromise = new Promise((resolve, reject) => {
  const arr = geraArray();
  const sum = arr.reduce((r, i) => r + i, 0);
  if (sum < 8000) return resolve(sum);
  return reject('O resultado é mais de 8000.');
});

const exec = () => {
  myPromise
    .then(fazAlgo)
    .catch(errinho);
};

exec();
