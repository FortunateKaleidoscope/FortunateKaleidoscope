'use strict';
var morgan = require('morgan');
var bodyParser = require('body-parser');
var passport = require('./passport');
var session = require('express-session');
var authMiddleware = require('./authMiddleware');

var SESSION_SECRET = require('../lib/secrets').SESSION_SECRET;

module.exports = function (app, express) {
  var authRoute = express.Router();
  var userRoute = express.Router();
  // Logger
  app.use(morgan('dev'));
  // Parses posts requests
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  // Uses sessions
  app.use(session({
    secret: SESSION_SECRET
  }));

  // Inits passport sessions
  app.use(passport.initialize());
  app.use(passport.session());

  // Establish static route
  app.use(express.static(__dirname + '/../../client'));

  app.use('/', function (req, res) {
    res.send('OK');
  });

  app.use('/auth', authRoute);
  require('./routes/authRoute.js')(authRoute);

  app.use('/api/user', userRoute);
  require('./routes/userRoute.js')(authRoute);

};
