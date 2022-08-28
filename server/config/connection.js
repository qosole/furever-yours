const { connect, connection } = require('mongoose');

connect('mongodb://localhost/fureveryours', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
