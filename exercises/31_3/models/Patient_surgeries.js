const createPatientSurgeries = (sequelize, DataTypes) => {
  const PatientSurgeries = sequelize.define(
    'Patient_surgeries',
    {},
    { timestamps: false },
  );

  PatientSurgeries.associate = (models) => {
    models.Surgeries.belongsToMany(models.Patients, {
      as: 'patients',
      foreignKey: 'surgery_id',
      otherKey: 'patient_id',
      through: PatientSurgeries,
    });

    models.Patients.belongsToMany(models.Surgeries, {
      as: 'surgeries',
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
      through: PatientSurgeries,
    });
  };

  return PatientSurgeries;
};

module.exports = createPatientSurgeries;
