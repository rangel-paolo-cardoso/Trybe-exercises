const defaultPlants = [
  {
    id: 1,
    breed: 'Bromelia',
    needsSun: false,
    origin: 'Argentina',
    size: 102,
    specialCare: {
      waterFrequency: 3,
    },
  },
  {
    id: 2,
    breed: 'Orquidea',
    needsSun: false,
    origin: 'Brazil',
    size: 99,
  },
];

let createdPlants = 0;

const calcWaterFrequency = (needsSun, origin, size) =>
  needsSun
    ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
    : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);

const initPlant = ({ id, breed, needsSun, origin, specialCare, size }) => {
  const waterFrequency = calcWaterFrequency(needsSun, origin, size);
  const newPlant = {
    id,
    breed,
    needsSun,
    origin,
    specialCare: {
      ...specialCare,
      waterFrequency,
    },
    size,
  };
  return newPlant;
};

const getPlants = () => defaultPlants;

const getPlantById = (id) => defaultPlants.filter((plant) => plant.id === id);

const removePlantById = (id) => defaultPlants.filter((plant) => plant.id !== id);

const getPlantsThatNeedsSunWithId = (idPlant) =>
  defaultPlants.filter(({ needsSun, id }) => needsSun && id === idPlant);

const editPlant = (plantId, newPlant) =>
  defaultPlants.map((plant) => (plant.id === plantId ? newPlant : plant));

const createNewPlant = (plant) => {
  const mappedPlant = initPlant(plant);
  defaultPlants.push(mappedPlant);
  createdPlants++;
  return mappedPlant;
};

module.exports = {
  createNewPlant,
  editPlant,
  getPlantById,
  getPlants,
  getPlantsThatNeedsSunWithId,
  removePlantById,
};
