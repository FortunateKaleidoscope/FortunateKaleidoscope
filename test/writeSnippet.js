'use strict';
var expect = require('chai').expect;
var writeSnippetFile = require('../server/lib/utils').writeSnippetFile;

describe('Creating Snippets', function(done){
  var snipObj = {};
  snipObj.text = 'snippets%20are%20awesome';
  snipObj.title = "Awesome Snippet"
  snipObj.tabPrefix = 'hello'
  snipObj.scope = "javascript"

  beforeEach(function (done) {
    fs.unlink(__dirname + '/../server/tmp/*.*', done)
  });

  it('should take a snippet object and write a Snippets', function(done){
    writeSnippetFile(snipObj).then(done);
  });
});
