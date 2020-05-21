const resp = document.getElementById('resp');

const fazAlgo = algo => resp.innerHTML = `O valor dobrado: ${algo * 2}`;

const errinho = err => resp.innerHTML = `${err}`; // menssagem de erro.

const random = () => parseInt(Math.random() * 50); // Aleatório de 1 a 50.

const elevaNum = arr => arr.map(i => i * i); // Eleva ao quadrado.

const geraArray = () => elevaNum([...Array(10)].map(i => random()));

const myPromise = new Promise((resolve, reject) => {
  const sum = geraArray().reduce((r, i) => r + i, 0);
  if (sum < 8000) return resolve(sum);
  return reject('Erro: O resultado é mais de 8000.');
});

const exec = () => {
  myPromise
    .then(val => fazAlgo(val))
    .catch(e => errinho(e));
};

exec(); // executa função exec.
