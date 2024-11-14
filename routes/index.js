const routes = require('express').Router();
const game = require('./games');
const auth = require('./auth-routes');
const profile = require('./profile-routes');
// const test = require('./test');

// routes.use('/', require('./swagger'));
routes.get('/', (req, res) => {
  res.render("dashboard", {
    layout: 'main',
  })
})

routes.get('/logout', (req, res) => {
  res.render("logout")
})

routes.use('/auth', auth);
routes.use('/profile', profile);

routes.use('/games', game);
// routes.use('/test', test);
routes.use(
  '/',
  (docData = (req, res) => {
    let docData = {
      documentationURL: ''
    };
    res.send(docData);
  })
)


module.exports = routes