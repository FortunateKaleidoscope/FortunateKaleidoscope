var request = require('supertest');
var expect = require('../node_modules/chai/chai').expect;
var db = require('../server/db/dbconfig');
var Sequelize = require('sequelize');

describe("User Table", function () {
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


  it("Should allow users to be created", function (done) {
    db.User.create({username: "fred", password: "123"}).then(function () {
      db.User.findOne({ where: { username : "fred"} }).then(function (user) {
        expect(user.password).to.equal('123');
        expect(user.username).to.equal('fred');
        done();
      });
    });
  });

  it("Should allow users to be deleted", function (done) {
    db.User.create({username: "fred", password: "123"})
    .then( function () { db.User.destroy({ where: { username: "fred" } }) })
    .then( function () { db.User.findOne({ where: { username: "fred" } }) })
    .then( function (user) {
          expect(user).to.equal(undefined);
          done();
    });
  });

describe("Snippets Table", function () {
  beforeEach(function ( done ) {
    var sequelize = new Sequelize('sniphub', 'root', 'test');
    db.Snippets.destroy({ where: { text: "awesome text snippet"}
    });
    sequelize.sync({force: true})
    .then( function () {
      done();
    });
});

    it("Should allow snippets to be created", function (done) {
      db.Snippets.create({text: "awesome text snippet", forkedCount: 1}).then(function () {
        db.Snippets.findOne({ where: { text : "awesome text snippet" } }).then(function (snippet) {
          expect(snippet.text).to.equal("awesome text snippet");
          expect(snippet.forkedCount).to.equal(1);
          done();
        });
      });
    });

    it("Should allow snippets to be deleted", function (done) {
      db.Snippets.create({text: "awesome text snippets", forkedCount: 1})
      .then( function () { db.Snippets.destroy({ where: { text: "awesome text snippets" } }) })
      .then( function () { db.Snippets.findOne({ where: { text: "awesome text snippets" } }) })
      .then( function (snippet) {
          expect(snippet).to.equal(undefined);
          done();
      });
    });
  });

});
