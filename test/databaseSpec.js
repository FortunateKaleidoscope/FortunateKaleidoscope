var request = require('supertest');
var expect = require('../node_modules/chai/chai').expect;
var db = require('../server/db/dbconfig');
var Sequelize = require('sequelize');

describe("Database", function () {
  beforeEach(function ( done ) {
    var sequelize = new Sequelize('sniphub', 'root', 'test');
    db.User.destroy({ where: {
      username: "fred"
    } });
    sequelize.sync({force: true})
    .then( function () {
      done();
    });
  
  });
  
  it("Should allow users to be stored in the User table", function (done) {
    db.User.create({username: "fred", password: "123"}).then(function () {
      db.User.findOne({ where: { username : "fred"} }).then(function (user) {
        expect(user.password).to.equal('123');
        expect(user.username).to.equal('fred');
        done();
      });
    });
  });

  it("Should delete users from the User table", function (done) {
    db.User.create({username: "fred", password: "123"})
    .then(function () { db.User.destroy({ where: { username: "fred" } }) })
    .then( function () { db.User.findOne({ where: { username: "fred" } }) })
    .then( function (user) {
          expect(user).to.equal(undefined);
          done();
    });
  });

});
