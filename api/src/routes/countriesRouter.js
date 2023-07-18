const { Router } = require("express");
const {
  getCountriesHandler,
  getCountriesByIdHandler,
} = require('../handlers/countriesHandler');
//const router = require(".");

const countriesRouter = Router();

countriesRouter.get("/", getCountriesHandler);
countriesRouter.get("/:id", getCountriesByIdHandler);
//console.log(searchCountriesHandler);

module.exports = countriesRouter;