'use strict';
var Promise = require('bluebird');
var User = require('../db/dbconfig').User;

module.exports = {
  getUser: function (profile) {
    console.log(profile);
    return new Promise(function (resolve, reject) {
      User.findOrCreate({
        where: {
          username: profile.username,
          imgUrl: profile._json.avatar_url,
          password: 'random'
        }
      }).spread(function (user, created) {
        resolve(user, created);
      }).catch(reject);
    });
  }
};
