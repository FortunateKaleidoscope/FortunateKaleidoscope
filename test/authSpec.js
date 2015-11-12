var request = require('supertest');
var expect = require('chai').expect;
var app = require('../server/app');
var cobbler = require('cobbler');
var WalkingDead = require('walking-dead')


describe('Auth should work', function(){
  var url = 'http://localhost:3001';
  var zopts = {debug: false, silent: false};
  var passport, server;
  var profile = {
    provider: 'github',
    id: 12345,
    displayName: 'John Doe',
    emails: [{value: 'john@doe.com'}]
  };

  beforeEach(function() {
    delete require.cache[require.resolve('../server/app')];
    app = require('../server/app');
  });

  afterEach(function(done) {
    passport.restore();
    server.close(done);
  });

  it("can be passed the Github Strategy", function(done) {
     var strategy = require('passport-github2').Strategy;
     passport = cobbler(strategy, profile);
     server = app.listen(3001, function() {
       new WalkingDead(url).zombify(zopts)
         .when(function (browser, next) {
           browser.visit(url + '/auth/github', next);
         })
         .then(function(res, next) {
            expect(res).to.exist
         })
         .end(done);
     });
   });
});
