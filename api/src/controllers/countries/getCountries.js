const { Country, Activity } = require("../../db.js");

const getcountries = async () => {
  const countries = await Country.findAll({
    include: {
      model: Activity,
      through: {
        attributes: [],
      },
    },
  });
  return countries;
};

module.exports = {getcountries};