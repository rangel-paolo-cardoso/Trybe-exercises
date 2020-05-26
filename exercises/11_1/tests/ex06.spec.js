const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    const animal = Animals.find(a => a.name === name);
    if (animal) return resolve(animal);
    return reject('Nenhum animal com esse nome!');
  })
)

const findAnimalByAge = (name) => (
  new Promise((resolve, reject) => {
    const animal = Animals.find(a => a.age === name);
    if (animal) return resolve(animal);
    return reject(Animals);
  })
)

const getAnimal = (name) =>
  ((typeof name !== 'number') ? findAnimalByName(name) : findAnimalByAge(name));
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });

  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal(5).then(animal => {
        expect(animal).toEqual({ name: 'Preguiça', age: 5, type: 'Cat' });
      });
    });
  });

  describe('Quando não existe o animal com a idade procurada', () => {
    test('Retorna um array de animais', () => {
      expect.assertions(1);
      return getAnimal(15).catch(error =>
        expect(error).toEqual(Animals)
      );
    });
  });
});
    
