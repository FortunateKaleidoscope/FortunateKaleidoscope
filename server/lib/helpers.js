'use strict';
var Promise = require('bluebird');
var db = require('../db/dbconfig');
var User = db.User;
var Snippet = db.Snippet;


module.exports = {
  getUser: function (profile) {
    return new Promise(function (resolve, reject) {
      db.User.findOrCreate({
        where: {
          username: profile.username,
          imgUrl: profile._json.avatar_url,
        }
      }).spread(function (user, created) {
        resolve(user, created);
      }).catch(reject);
    });
  },

  writeSnippet: function (req, cb) {
    var snippet = escape(req.body.snippet);
    // takes the array of body tags and turns them into objects
    var tags = req.body.tags.map(function (tag) {
      return { tagname: tag };
    });
    // Building snippet object to create
    var post = {
      text: snippet,
      forkedCount: 0
    };

    var user = req.user;

    User.findOrCreate({
      where: { username: user }
    }).then(function (result) {
      post.userId = result[0].id;
      Snippet.create(post).then(function(post){
        cb(null, post);
      });
    }).catch(cb);
  },

  getSnippets: function(){
    return db.Snippets.findAll({
      include: [{
        model: User
      }]
    }).then(function ( result ) {
      return result;
    });
  },

  searchSnippets: function(searchTerm){
    return Promise.map(searchTerm.split(' '), function (term) {
      return db.Snippets.findAll({ include: [{
        model: db.Tags,
        where: { tagname: term }
      }]});
    });
  }
};
