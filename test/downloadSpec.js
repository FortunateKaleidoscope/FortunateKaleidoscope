var request = require('supertest');
var expect = require('chai').expect;
var app = require('../server/app');


describe('Should download files', function(){
  it('route should exist for single snippet', function(done){
    request(app)
      .get('/download/1')
      .expect(200, done);
  });
  it('should have route for users snippets', function(done){
    request(app)
      .get('/api/user/lauren/download')
      .expect(200, done);
  });
  it('should send a zip file', function(done){
    request(app)
      .get('/download/1')
      .expect(200)
      .end(function(err, res) {
        expect(res.header['Content-length']).to.be.above(10);
        expect(res.header['Content-type']).to.not.be('text/html');
      });
  });
});
