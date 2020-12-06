const { Patients, Plans } = require('../models');

const listAllPacients = async (_req, res) => {
  try {
    const listOfPatients = await Patients
      .findAll({include: { model: Plans, as: 'plan' } });
    if (!listOfPatients) {
      return res.status(404).send({ message: 'No patients found' });
    }
    return res.status(200).json(listOfPatients);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Algo deu errado!' });
  }
};

module.exports = {
  listAllPacients,
};
