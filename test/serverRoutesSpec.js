var request = require('supertest');
var expect = require('chai').expect;
var app = require('../server/app');

describe('Routes', function(done){
  it('should route to the index page', function(done){
    request(app)
       .get('/')
       .expect(200, done)
  });
  it('should redirect user that is not signed in to the user page', function(done){
    request(app)
      .get('/api/user/1')
      .expect(301, done);
  });
  it('should authorize user', function (done) {
    request(app)
      .get('/auth/github')
      .expect(301, done);
  })
});
