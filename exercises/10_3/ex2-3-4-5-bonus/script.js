const resp = document.getElementById('resp');

const fazAlgo = algo => resp.innerHTML = [2, 3, 5, 10].map(r => algo / r);

const errinho = err => console.log(err); // menssagem de erro.

const random = () => parseInt(Math.random() * 50); // Aleatório de 1 a 50.

const elevaNum = arr => arr.map(i => i * i); // Eleva ao quadrado.

const geraArray = () => elevaNum([...Array(10)].map(i => random()));

const myPromise = new Promise((resolve, reject) => {
  const sum = geraArray().reduce((r, i) => r + i, 0);
  return (sum < 8000) ? resolve(sum): reject('É mais de oito mil! Essa promise deve estar quebrada!');
});

const exec = async () => {
  await myPromise
    .then(val => fazAlgo(val))
    .catch(e => errinho(e));
};

exec(); // executa função exec.
