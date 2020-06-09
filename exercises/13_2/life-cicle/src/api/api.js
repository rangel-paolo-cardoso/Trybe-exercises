const getDog = async () => {
  let myDog = null;
  await fetch('https://dog.ceo/api/breeds/image/random')
    .then((resposta) => resposta.json())
    .then((dog) => (myDog = dog.message));
  return myDog;
}

export default getDog;