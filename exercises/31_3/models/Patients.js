const createPatients = (sequelize, DataTypes) => {
  const Patients = sequelize.define('Patients', {
    patient_id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    full_name: DataTypes.STRING,
    plan_id: {
      foreignKey: true,
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  });

  Patients.associate = (models) => {
    Patients.belongsTo(models.Plans, { foreignKey: 'plan_id', as: 'plan' });
  };

  return Patients;
};

module.exports = createPatients;
