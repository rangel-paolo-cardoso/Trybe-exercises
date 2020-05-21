const fazAlgo = algo => console.log(`O dobro do valor: ${algo * 2}`);

const errinho = err => console.log(`${err}`);

const random = () => parseInt(Math.random() * 50); // Aleatório de 1 a 50.

const elevaNum = arr => arr.map(i => i * i); // Eleva ao quadrado.

const geraArray = () => elevaNum([...Array(10)].map(i => random()));

const myPromise = new Promise((resolve, reject) => {
  const arr = geraArray();
  const sum = arr.reduce((r, i) => r + i, 0);
  if (sum < 8000) return resolve(sum);
  return reject('Erro: O resultado é mais de 8000.');
});

const exec = () => {
  myPromise
    .then(val => fazAlgo(val))
    .catch(e => errinho(e));
};

exec();
