const {getcountries} = require('../controllers/countries/getCountries');
const {getByNameCountries} = require('../controllers/countries/getByNameCountries');
const {getCountriesById} = require('../controllers/countries/getCountriesById');
  
  const getCountriesHandler = async (req, res) => {
    const { name } = req.query;
    try {
      const country = name ? await getByNameCountries(name) : await getcountries();
      
      res.status(200).json(country);
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  };
  
  const getCountriesByIdHandler = async (req, res) => {
    const { id } = req.params;
    const idC = id.toUpperCase();
    try {
      const countries = await getCountriesById(idC);
      
      return res.status(200).json(countries);
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  };
  
  
  module.exports = { 
    getCountriesHandler, 
    getCountriesByIdHandler,
};