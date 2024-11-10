const routes = require('express').Router();
const game = require('./games');
// const test = require('./test');


routes.use('/', require('./swagger'));
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