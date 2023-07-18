const { Country } = require('../../db');
const axios = require("axios");

const getCountries = (arr) =>
  arr.map((el) => {
    return {
      id: el.cca3,
      name: el.name.common,
      flag: el.flags[0],
      continent: el.continents[0],
      capital: el.capital !== undefined ? el.capital[0] : 'capital not found',
      subregion: el.subregion,
      area: el.area,
      population: el.population,
    };
  });

const getApiCountries = async () => {
  
  const DB = await Country.findAll()
  if(DB.length === 0){
    const data = (await axios.get("https://restcountries.com/v3/all")).data;
    const CountriesApi = getCountries(data);
    await Country.bulkCreate(CountriesApi);
    console.log('Countries saved in DB');
  }
  console.log('Countries in DB');
};

module.exports = {getApiCountries};