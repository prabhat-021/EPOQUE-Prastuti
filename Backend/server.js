const express = require('express')
const app = express()
const session = require('express-session');
const passport = require("passport")
require('dotenv').config()

require("./auth")

const port = process.env.PORT || 5000

app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

function isloggedin(req, res, next) {
    req.user ? next() : res.sendStatus(401)
}


app.get("/", (req, res) => {
    res.send("<a href='/auth/google'>Authenticate with Google</a>")
})

app.get("/auth/google", 
    passport.authenticate('google', {scope: ['email', 'profile']})
)

app.get( '/google/callback',
  passport.authenticate( 'google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/google/failure'
  })
);

app.get("/protected", isloggedin, (req, res) => {
    res.send(`this is protected page ${req.user.displayName}`)
})

app.get("/logout", (req, res) => {
    res.send("byebye")
    req.logOut();
    req.session.destroy();
})

app.listen(port, () => {
    console.log("port is listening to ", port);
})
