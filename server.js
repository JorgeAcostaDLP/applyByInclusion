const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

const session = require('express-session');
const bodyParser = require('body-parser');

const formsRouter = require('./routes/forms');
const adminsRouter = require('./routes/admins');
const commentsRouter = require('./routes/comments');

const sess = {
  secret: process.env.secret,
  cookie: {},
  resave: false,
  saveUnitialized: true
};

if (app.get('env') === 'production') {
  sess.cookie.secure = true;
  app.set('trust proxy', 1);
}

const strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL: process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
  },
  function (accessToken, refreshToken, extraParams, profile, done) {
    return done(null, profile);
  }
)

passport.use(strategy);

app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/forms', formsRouter);
app.use('/admins', adminsRouter);
app.use('/comments', commentsRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server app listening on port ${port}!`);
});
