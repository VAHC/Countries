const { Router } = require('express');
const countriesRouter = require('./countriesRouter');
//const activitiesRouter = require('./activitiesRouter');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', countriesRouter);
//router.use('/activities', activitiesRouter);


// const { Country, Activity } = require('../db');
// const axios = require('axios');
// // const { Router } = require('express');
// const { Op } = require('sequelize');

// // Importar todos los routers;
// // Ejemplo: const authRouter = require('./auth.js');


// // Configurar los routers
// // Ejemplo: router.use('/auth', authRouter);

// async function createActivity(countryId, activity) {
//   const country = await Country.findOne({ where: { id: countryId } });
//   const newActivity = await Activity.create(activity);
//   newActivity.setCountries(country);
// }

// router.get('/api/activities', async (req, res) => {
//   let rappel = createActivity('ARG', {
//     name: 'rappel',
//     difficulty: 5,
//     duration: 8,
//     season: 'Summer',
//     img: 'https://www.nevasport.com/fotos/151113/525153.jpg',
//   });
//   let ski = createActivity('CAN', {
//     name: 'ski',
//     difficulty: 3,
//     duration: 5,
//     season: 'Winter',
//     img: 'https://www.lugaresdenieve.com/sites/default/files/imagenes-reportajes/meeting-lugares-de-nieve-mini2.jpg',
//   });
//   let trekking = createActivity('POL', {
//     name: 'trekking',
//     difficulty: 2,
//     duration: 1,
//     season: 'Spring',
//     img: 'https://blueridgehikingco.com/sites/default/files/wysiwyg/IMG_1206_0.jpg',
//   });
//   let pesca = createActivity('HND', {
//     name: 'pesca',
//     difficulty: 1,
//     duration: 2,
//     season: 'Autumn',
//     img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Recreational-fishing-colombia.jpg',
//   });
//   let rafting = createActivity('ARG', {
//     name: 'rafting',
//     difficulty: 4,
//     duration: 6,
//     season: 'Spring',
//     img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Rio_Salvaje_Jalcomulco.jpeg/1920px-Rio_Salvaje_Jalcomulco.jpeg',
//   });
//   await Promise.all([rappel, ski, trekking, pesca, rafting]).then(() => {
//     res.status(200).send('activities and associations created');
//   });
// });

// router.get('/api/countries', async (req, res) => {
//   const { name } = req.query;
//   const condition = {
//     include: [
//       {
//         model: Activity,
//         attributes: ['name', 'difficulty', 'duration', 'season'],
//         through: {
//           attributes: [],
//         },
//       },
//     ],
//   };
//   const where = {};
//   try {
//     if (name) where.name = { [Op.iLike]: `%${name}%` };
//     condition.where = where;
//     const countriesDB = await Country.findAll(condition);
//     if (countriesDB.length) return res.status(200).send(countriesDB);
//     else {
//       const { data } = await axios.get('https://restcountries.com/v3/all');
//       const countriesAPI = data.map((country) => {
//         return {
//           id: country.cca3,
//           name: country.name.common,
//           flag: country.flags[0],
//           continent: country.continents[0],
//           capital: country.capital ? country.capital[0] : 'N/A',
//           subregion: country.subregion,
//           area: country.area,
//           population: country.population,
//         };
//       });
//       await Country.bulkCreate(countriesAPI);
//       res.status(200).send(countriesAPI);
//     }
//   } catch (error) {
//     res.status(404).send(error);
//   }
// });

// router.get('/api/countries/:id', function (req, res) {
//   const { id } = req.params;
//   Country.findByPk(id, {
//     include: [
//       {
//         model: Activity,
//         attributes: ['name', 'difficulty', 'duration', 'season'],
//         through: {
//           attributes: [],
//         },
//       },
//     ],
//   })
//     .then((country) => {
//       if (!country) return res.status(404).send(`El id "${country}" no corresponde a un país existente.`);
//       return res.json(country); // res.send(country);
//     })
//     .catch((error) => res.send(error));
// });





module.exports = router;
