const { Patients, Plans, Surgeries } = require('../models');

const listAllPacients = async (_req, res) => {
  try {
    const listOfPatients = await Patients
      .findAll({ include: { model: Plans, as: 'plan' } });
    if (!listOfPatients) {
      return res.status(404).send({ message: 'No patients found' });
    }
    return res.status(200).json(listOfPatients);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Something is wrong!' });
  }
};

// Exercício 6
// Crie um endpoint que liste todos os pacientes e suas respectivas cirurgias realizadas.

const listAllPacientsAndTheirSurgeries = async (_req, res) => {
  try {
    const listOfPatients = await Patients
      .findAll({ include: { model: Surgeries, as: 'surgeries', through: { attributes: [] } } });
    if (!listOfPatients) {
      return res.status(404).send({ message: 'No patients found' });
    }
    return res.status(200).json(listOfPatients);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Something is wrong!' });
  }
};

// Exercício 7
// Crie um endpoint que de acordo com o id de um plano,
// que deve ser recebido via requisição,
// liste os pacientes que o possuem.

const listPatientsByTheirPlans = async (_req, res) => {
  try {
    const listOfPatients = await Patients
      .findAll({ include: { model: Plans, as: 'plan' } });
    if (!listOfPatients) {
      return res.status(404).send({ message: 'No patients found' });
    }
    return res.status(200).json(listOfPatients);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Something is wrong!' });
  }
};

module.exports = {
  listAllPacients,
  listAllPacientsAndTheirSurgeries,
  listPatientsByTheirPlans,
};
