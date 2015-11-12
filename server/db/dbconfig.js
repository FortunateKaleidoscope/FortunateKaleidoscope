var mysql = require('mysql');
var Sequelize = require('sequelize');
var secret = require('../lib/secrets').sql;

var sequelize = new Sequelize('sniphub', 'root', secret);


var User = sequelize.define('User', {
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

var SnippetTags = sequelize.define('snippet_tags', {

})

User.hasMany(Snippets);
Snippets.belongsTo(User);
Snippets.belongsToMany(Tags, { through: 'snippet_tags' });
Tags.belongsToMany(Snippets, { through: 'snippet_tags' });

User.sync();
Snippets.sync();
Tags.sync();
SnippetTags.sync();