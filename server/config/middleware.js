'use strict';
var morgan = require('morgan');
var bodyParser = require('body-parser');
var passport = require('./passport');
var session = require('express-session');
var cookieParser = require('cookie-parser');

if (process.env.NODE_ENV === 'production') {
  var SESSION_SECRET = process.env.SESSION_SECRET;
} else {
  var SESSION_SECRET = require('../lib/secrets').SESSION_SECRET;
}

module.exports = function (app, express) {
  var authRoute = express.Router();
  var publicRoute = express.Router();
  var apiRoute = express.Router();
  // Logger
  app.use(morgan('dev'));
  // Parses posts requests
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  // Uses sessions
  app.use(session({
    secret: SESSION_SECRET,
    resave: true
  }));

  // Uses cookies for client side to use
  app.use(cookieParser());

  // Inits passport sessions
  app.use(passport.initialize());
  app.use(passport.session());

  // Establish static route
  if (process.env.NODE_ENV === 'production') {
    process.env.PWD = process.cwd()
    app.use(express.static(process.env.PWD + '/../../client'));
  } else {
    app.use(express.static(__dirname + '/../../client'));
  }

  app.use('/', publicRoute);
  require('./routes/publicRoute')(publicRoute);

  app.use('/auth', authRoute);
  require('./routes/authRoute')(authRoute);

  // app.use('/user', userRoute);
  // require('./routes/userRoute')(userRoute);

  app.use('/api', apiRoute);
  require('./routes/apiRoute')(apiRoute);

};
