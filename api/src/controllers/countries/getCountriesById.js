const {Country, Activity} = require('../../db');

const getCountriesById = async (id) => {
    const foundCountry = await Country.findByPk(id, {
      include: {
        model: Activity,
        through: {
          attributes: [],
        },
      },
    });

    if (!foundCountry) throw new Error(`Country not found with ID: ${id}`);
    return foundCountry;
  };

  module.exports = {getCountriesById};