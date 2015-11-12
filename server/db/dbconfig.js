var mysql = require('mysql');
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

var Snippets = sequelize.define('Snippets', {
  text : Sequelize.STRING,
  forkedCount : Sequelize.INTEGER
});

var Tags = sequelize.define('Tags', {
  tagname: Sequelize.STRING
});

User.hasMany(Snippets);
Snippets.belongsTo(User);
Snippets.hasMany(Tags);
Tags.hasMany(Snippets);

User.sync();
Snippets.sync();
Tags.sync();