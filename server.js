
// import saveinfo  from "./utils/social";
const express = require('express')
const next = require('next')

const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// Passport session setup.
passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    done(null, obj);
});

// Use the FacebookStrategy within Passport.
passport.use(new FacebookStrategy({
    clientID: '2264027293896025',
    clientSecret: '5c231ad93ca6151bb56d1ba97138c882',
    callbackURL: 'http://localhost:3000/auth/facebook/callback',
    profileFields: ['id', 'email', 'displayName']
},
    function (accessToken, refreshToken, profile, done) {
        process.nextTick(function () {
            //Check whether the User exists or not using profile.id  
            const { id, displayName } = profile;
            console.log(id);
            console.log(displayName);
            console.log(profile.emails[0].value);
            //saveinfo(id,displayName,profile.emails[0].value)
            return done(null, profile);
        });
    }
));

passport.use(new GoogleStrategy({
    clientID: "15625499876-fpnmi7emctu164oed213atj3hunaae2h.apps.googleusercontent.com",
    clientSecret: "ubhRFrrv8iDNo6XIIn82so1X",
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback: true
},
    function (request, accessToken, refreshToken, profile, done) {
        process.nextTick(function () {
            //Check whether the User exists or not using profile.id
            console.log(profile.id);
            console.log(profile.displayName);
            console.log(profile.email);
            return done(null, profile);
        });
    }
));


app.prepare().then(() => {

    const server = express()

    server.use(bodyParser.urlencoded({ extended: false }))

    server.use(bodyParser.json());

    server.use(passport.initialize());

    server.use(passport.session());

    server.get('/', (req, res) => {
        return app.render(req, res, '/index', req.query)
    })

    server.get('/login', (req, res) => {
        return app.render(req, res, '/login', req.query)
    })

    server.get('/signup', (req, res) => {
        return app.render(req, res, '/signup', req.query)
    })

    server.get('/account', (req, res) => {
        return app.render(req, res, '/account', req.query)
    })

    server.get('/auth/facebook', passport.authenticate('facebook', { scope: 'public_profile,email,user_friends,user_posts' }));

    server.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect: 'http://localhost:3000/account',
            failureRedirect: '/login'
        }),
    );

    server.get('/auth/google',
        passport.authenticate('google', {
            scope:
                ['https://www.googleapis.com/auth/plus.login',
                    'https://www.googleapis.com/auth/userinfo.email',
                    'https://www.googleapis.com/auth/userinfo.profile']
        }
        )
    );

    server.get('/auth/google/callback',
        passport.authenticate('google', {
            successRedirect: 'http://localhost:3000/account',
            failureRedirect: '/login'
        }
        )
    );

    server.all('*', (req, res) => {
        return handle(req, res)
    })


    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})







