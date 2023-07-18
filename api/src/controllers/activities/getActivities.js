const { Activity, Country } = require('../../db');

const getActivities = async () => {
  const db = await Activity.findAll(
    {
    include: {
      model: Country,
      through: {
        attributes: [],
      },
    },
  }
  );
  return db;
};

module.exports = {getActivities};