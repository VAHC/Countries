const {Activity, Country} = require('../../db');

const createActivity = async (name, difficulty, duration, season, countries) => {
      
    const newActivity = await Activity.create({
          name,
          difficulty,
          duration,
          season
      });

      const selectCountries = await Country.findAll({
          where: {
              name: countries
          }
      });

      newActivity.addCountry(selectCountries)

      return newActivity;
      
};

  module.exports = createActivity;

  // const postActivities = async (
  //   name,
  //   difficulty,
  //   duration,
  //   season,
  //   countries
  // ) => {
  //   const newActivity = awacreateActivityit Activity.create({
  //       name,
  //       difficulty,
  //       duration,
  //       season,
  //   });
  //   const countriesSelected = await Country.findAll({
  //     where: {
  //       name: countries
  //     }
  //   })
  //   newActivity.addCountry(countriesSelected);
  //   return newActivity;
  // };
