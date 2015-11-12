var Sequelize = require('sequelize');
var secret = require('../lib/secrets').sql

var sequelize = new Sequelize('sniphub', 'root', secret);

var User = sequelize.define('User', {
  username: {
    type: Sequelize.STRING,
    unique: true
  },
  password: Sequelize.STRING,
  imgUrl: Sequelize.STRING
});

var Snippets = sequelize.define('Snippets')