const createActivity = require('../controllers/activities/createActivity')

const createActivityHandler = async (req, res) => {

    const { name, difficulty, duration, season, countries } = req.body;

    try {
        if (!name || !difficulty || !duration || !season) {
            res.status(400).send('Please check that you have completed all the required fields')
        } else {
            const newActivity = await createActivity(name, difficulty, duration, season, countries)
            res.status(200).send('Congratulations! Your activity has been created!')
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = createActivityHandler;

const {getActivities} = require('../controllers/activities/getActivities');
  
  const getActivitiesHandler = async (req, res) => {
    try {
      const activities = await getActivities();
      res.status(200).json(activities);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  
  
  module.exports = { 
    getActivitiesHandler
};

// const postActivitiesHandler = async (req, res) => {
//   const { name, difficulty, duration, season, countryId } = req.body;

//   try {
//     const newPost = await postActivities(
//       name,
//       difficulty,
//       duration,
//       season,
//       countryId
//     );
//     res.status(201).json(newPost);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };