// # Database configuration

//We use sequelize ORM to connect to MySql database.
//Credentials for the database are stored in /lib/secrets.js
//To use with your own database recreate the file and export an
//object with the key 'sql' and your password as the value


// Declare dependencies
var mysql = require('mysql');
var Sequelize = require('sequelize');
var secret = require('../lib/secrets').sql;
// Connection to MySql database using database named sniphub

var sequelize = new Sequelize('sniphub', 'root', secret);


var User = sequelize.define('users', {
  username: {
    type: Sequelize.STRING,
    unique: true
  },
  password: Sequelize.STRING,
  imgUrl: Sequelize.STRING
});

var Snippets = sequelize.define('snippets', {
  text : Sequelize.STRING,
  forkedCount : Sequelize.INTEGER
});

var Tags = sequelize.define('tags', {
  tagname: Sequelize.STRING
});

// Declare join table to be used in Many to Many relationship
var SnippetTag = sequelize.define('snippet_tag', {

});
// Creates one to many relationship between User and Snippets table
User.hasMany(Snippets);
Snippets.belongsTo(User);

// Creates many to many relationship between Snippets and Tags
Snippets.belongsToMany(Tags, { through: 'snippet_tag'});
Tags.belongsToMany(Snippets, { through: 'snippet_tag'});


User.sync();
Snippets.sync();
Tags.sync();
SnippetTag.sync();

module.exports = {
  User: User,
  Snippets: Snippets,
  Tags: Tags
};