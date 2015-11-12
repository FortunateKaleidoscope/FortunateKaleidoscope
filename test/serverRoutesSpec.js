var request = require('supertest');
var expect = require('chai').expect;
var app = require('./mockAuth').app;
var login = require('./mockAuth').login;
var logout = require('./mockAuth').logout;


describe('Routes', function(done){

  it('should route to the index page', function(done){
    request(app)
       .get('/')
       .expect(200, done)
  });
  it('should show users page', function(done){
    request(app)
      .get('/user/1')
      .expect(200);

    request(app)
      .get('/user/2')
      .expect(200, done);
  });
  it('should redirect user to github on login', function (done) {
    request(app)
      .get('/auth/github')
      .expect(302, done);
  });
  it('should return an array of snippets from the server', function(done){
    request(app)
      .get('/api/snippets')
      .expect(200)
      .end(function (err, res) {
        if (err) {
          console.log('Error: ', err)
        }
        // var data = JSON.parse(res);
        expect(res.body).to.be.an('array');
        expect(res.body[0]).to.have.property('snippet');
        expect(res.body[0]).to.have.property('title');
        expect(res.body[0]).to.have.property('tags');
        expect(res.body[0]).to.have.property('createdBy');
        done();
      });
  });
  it('should accept post requests', function(done){
    login(this.user);
    console.log(this.user);
    request(app)
      .post('/user/createSnippet')
      .send({snippet: 'asdf', title: 'my cool snip', tags: ['a', 'b', 'c'], createdBy: 'bob'})
      .end(function(err, res) {
        console.log(res.body);
        expect(res.body).to.be.an('object');
        expect(res.body[0]).to.have.property('snippet');
        expect(res.body[0]).to.have.property('title');
        expect(res.body[0]).to.have.property('tags');
        expect(res.body[0]).to.have.property('createdBy');
        logout();
        done();
      });
  });
});
