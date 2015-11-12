var Layer = require('express/lib/router/layer');
var app = require('../server/app');

exports.login = login;
exports.logout = logout;
exports.app = app;

function login(user){

  var fn = function insertUser(req, res, next){
    req.user = user;
    next();
  }

  var layer = new Layer('/', {
    sesitive: false,
    strict: false,
    end: false
  }, fn);
  layer.route = undefined;

  app._router.stack.unshift(layer);
}

function logout(){
  app._router.stack.shift();
}
