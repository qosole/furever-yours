//requiring express router and api routes
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
