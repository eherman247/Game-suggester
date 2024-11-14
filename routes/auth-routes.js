const routes = require('express').Router();
const passport = require('passport')
const passportSetup = require('../config/passport-setup')

routes.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/logout');
})

routes.get('/google', passport.authenticate('google', {
  scope: ['profile']
}))

routes.get('/login', (req, res) => {
  res.render("login", {
    layout: 'login',
  })
})

routes.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  // res.send(req.user)
  res.redirect('/profile')
})

module.exports = routes