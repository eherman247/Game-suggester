const routes = require('express').Router();

const authCheck = (req, res, next) => {
  if(!req.user){
    res.redirect('/auth/login');
  }else{
    next();
  }
}
routes.get('/', authCheck, (req, res) => {
  res.render('profile');
})

module.exports = routes;