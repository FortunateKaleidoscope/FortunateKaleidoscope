'use strict';
var expect = require('chai').expect;
var writeSnippetFile = require('../server/lib/utils').writeSnippetFile;
var zipFolder = require('../server/lib/utils').zipFolder;
var Promise = require('bluebird');
var fs = require('fs');
var path = require('path');
var del = require('del');

describe('Creating Snippets', function(done){
  var snipObj = {};
  snipObj.text = 'snippets%20are%20awesomer';
  snipObj.title = "Awesome Snippet"
  snipObj.tabPrefix = 'hello'
  snipObj.scope = "javascript"

  var snipObj1 = {};
  snipObj1.text = 'snippets%20are%20awesome';
  snipObj1.title = "Awesome Snippet1"
  snipObj1.tabPrefix = 'hello'
  snipObj1.scope = "javascript"

  var snipObj2 = {};
  snipObj2.text = 'snippets%20are%20awesomest';
  snipObj2.title = "Awesome Snippet2"
  snipObj2.tabPrefix = 'hello'
  snipObj2.scope = "javascript"

  var snips = [snipObj, snipObj1, snipObj2];

  var writePathSnip = path.join(__dirname + '/../server/tmp/');
  var writePathZip = path.join(__dirname + '/../server/zip/')

  beforeEach(function (done) {
    del([writePathSnip + '*.sublime-snippet', writePathZip+'*.zip']).then(function(){
      done();
    });
  });

  it('should take a snippet object and write a Snippets', function(done){
    writeSnippetFile(snipObj).then(function(){
      done();
    });
  });

  it('should zip up a file', function (done) {
    writeSnippetFile(snipObj).then(function(){
      zipFolder(writePathSnip, writePathZip, function(){
        done();
      });
    });
  });

  it('should zip up a folder', function(done){
    Promise.map(snips, function (snip) {
      console.log(snip);
      return writeSnippetFile(snip);
    }).then(function () {
      zipFolder(writePathSnip, writePathZip, function(){
        done();
      });
    });
  });

});
