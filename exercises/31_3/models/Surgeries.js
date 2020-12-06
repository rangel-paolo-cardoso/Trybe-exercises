const createSugeries = (sequelize, DataTypes) => {
  const Surgeries = sequelize.define('Surgeries', {
    surgery_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    speciality: DataTypes.STRING,
    doctor: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  return Surgeries;
};

module.exports = createSugeries;
