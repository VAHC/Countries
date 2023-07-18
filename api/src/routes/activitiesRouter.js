const { Router } = require("express");
const {
    getActivitiesHandler,
    //createActivityHandler
} = require('../handlers/createActivityHandler');

const createActivityHandler = require('../handlers/createActivityHandler')

const activitiesRouter = Router();

activitiesRouter.get('/', getActivitiesHandler);
activitiesRouter.post('/', createActivityHandler);

module.exports = activitiesRouter;