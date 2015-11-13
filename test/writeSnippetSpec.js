'use strict';
var expect = require('chai').expect;
var writeSnippetFile = require('../server/lib/utils').writeSnippetFile;
var fs = require('fs');
var path = require('path');
var del = require('del');

describe('Creating Snippets', function(done){
  var snipObj = {};
  snipObj.text = 'snippets%20are%20awesomer';
  snipObj.title = "Awesome Snippet"
  snipObj.tabPrefix = 'hello'
  snipObj.scope = "javascript"

  beforeEach(function (done) {
    del(path.join(__dirname + '/../server/tmp/*.sublime-snippet')).then(function(){
      done();
    });
  });

  it('should take a snippet object and write a Snippets', function(done){
    writeSnippetFile(snipObj).then(function(){
      done();
    });
  });
});
