var request = require('supertest');
var expect = require('chai').expect;
var app = require('../server/app');
var dummyData = require('./dummyData');

describe('Auth should work', function(){
  xit('should block users that are not logged in', function(done){
    request(app)
      .post('/api/snippets')
      .send(dummyData[0])
      .expect(302, done);
  });
  it('should accept post requests', function(done){
    var sendData = {};
    sendData.text = 'Hello'
    sendData.username = 'Yilen';
    sendData.tags = ['javascript', 'python', 'haxs'];
    request(app)
      .post('/api/snippet')
      .send(sendData)
      .expect(200, done);
  });
});
