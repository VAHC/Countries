const {Country, Activity} = require('../../db');
const { Op } = require("sequelize");

const getByNameCountries = async (name) => {
  const foundCountry = await Country.findAll({
    where: { 
      name: { [Op.iLike]: `%${name}%` } 
    },
    include: {
      model: Activity,
      through: {
        attributes: [],
      },
    }
  });

  if (!foundCountry) throw new Error(`Country not found with name: ${name}.`);
  else return foundCountry;
};

module.exports = {getByNameCountries};