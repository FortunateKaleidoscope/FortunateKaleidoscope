// # Database configuration

//We use sequelize ORM to connect to MySql database.
//Credentials for the database are stored in /lib/secrets.js
//To use with your own database recreate the file and export an
//object with the key 'sql' and your password as the value


// Declare dependencies
var Sequelize = require('sequelize');
var secret = require('../lib/secrets').sql;
var mysql = require('mysql');

// Connection to MySql database using database named sniphub

var sequelize = new Sequelize('sniphub', 'root', secret);


var User = sequelize.define('users', {
  username: {
    type: Sequelize.STRING,
    unique: true
  },
  imgUrl: Sequelize.STRING
});

var Snippet = sequelize.define('snippets', {
  text : Sequelize.STRING,
  forkedCount : Sequelize.INTEGER
});
//TODO: make tagname unique
var Tag = sequelize.define('tags', {
  tagname: {
    type: Sequelize.STRING,
    unique: true
  }
});
//TODO: make a complete check

sequelize
  .sync()
  .then(function (err) {
    console.log('It worked!');
  }, function (err) { 
    console.log('An error occurred while creating the table:', err);
  });

// Creates one to many relationship between User and Snippets table
Snippet.belongsTo(User, {foreignKey: 'userId'});
User.hasMany(Snippet, {foreignKey: 'userId'});
Snippet.belongsToMany(Tag, { through: 'snippet_tag'});
// Creates many to many relationship between Snippets and Taga
Tag.belongsToMany(Snippet, { through: 'snippet_tag'});

module.exports = {
  User: User,
  Snippet: Snippet,
  Tag: Tag,
};
