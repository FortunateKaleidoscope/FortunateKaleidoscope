'use strict';
var Promise = require('bluebird');
var db = require('../db/dbconfig');

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
  writeSnippet: function (req) {
    return new Promise(function (resolve) {
      db.Snippets.
    });
  },
  getSnippets: function(){
    return [];
  },

};
