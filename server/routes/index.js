//requiring express router and api routes
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);


module.exports = router;
