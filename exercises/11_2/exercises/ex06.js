function dogPics() {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then(e => e.json()
      .then(json => e.ok ? Promise.resolve(json) : Promise.reject(json))
  );
}
module.exports = { dogPics };
// console.log(dogPics());
