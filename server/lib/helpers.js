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
    var snippet = escape(req.body.text);
    // takes the array of body tags and turns them into objects
    var tags = req.body.tags.map(function (tag) {
      return { tagname: tag };
    });
    var languageScope = req.body.scope;
    var snipTitle = escape(req.body.title);
    var tab = escape(req.body.tabPrefix);
    // Building snippet object to create
    var post = {
      text: snippet,
      forkedCount: 0,
      tabPrefix: tab,
      title: snipTitle,
      scope: languageScope
    };
    // Retrieves user name from request
    var user = req.user.username;

    // Searches for User based on request
    User.findOrCreate({
      where: { username: user }
      // if found, adjusts snippet userId to match found user's id
    }).then(function (result) {
      post.userId = result[0].id;
      Snippet.create(post).then(function (post) {
        cb(null, post);
      });
    }).catch(cb);
  },

  // Note: Do we need this function?
  // getSnippets: function () {
  //   return db.Snippets.findAll({
  //     include: [{
  //       model: User
  //     }]
  //   }).then(function (result) {
  //     return result;
  //   });
  // },

  getSnippet: function(snippetID) {
    return Snippet.findAll({
      where: {
        id: snippetID
      },
      include: [{
        model: User
      }]
    }).then(function (result) {
      return result;
    });
  },

  getSnippetsMostRecent: function () {
    //Search all snippets, limit 10, ordered by createdAt date
    return Snippet.findAll({
      limit: 10,
      order: 'createdAt DESC',
      include: [{
        model: User
      }]
    }).then(function (result) {
      return result;
    });
  },

  getSnippetsByUser: function (user, cb) {
    User.find({
      where: {
        username: user
      }
    }).then(function (user) {
      var id = user.get('id');
      Snippet.findAll({
        where : {
          userId : id
        },
        include: [{
          model: User
        }]
      }).then(function (result) {
        //We are good here;
        cb(null, result);
      });
    });
  },

  searchSnippets: function (searchTerm) {
    return Promise.map(searchTerm.split(' '), function (term) {
      return db.Snippets.findAll({ include: [{
        model: db.Tags,
        where: { tagname: term }
      }]});
    });
  }
};
