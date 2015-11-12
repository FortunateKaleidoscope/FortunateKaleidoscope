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
    var snippet = escape(req.body.snippet);
    // takes the array of body tags and turns them into objects
    var tags = req.body.tags.map(function (tag) {
      return db.Tags.build({tagname: escape(tag)});
    });
    var user = req.user;
    // New instance of snippet
    var snipInstance = db.Snippets.build({
      text: snippet,
      user_id: user.id
    });
    // return new promise that saves the snip instance
    return snipInstance.save().then(function (snip) {
      // then we map over the tags and save them
      return Promise.map(tags, function (tag, i) {
        return db.Tags.findOrCreate({where: {tagname: tag}}).then(function(t){
          var row = db.SnippetTag.build({tagId: t.id, snippetId: snip.id});
          return row.save();
        });
      });
    });
  },
  getSnippets: function(){
    return db.Snippets.findAll({});
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
