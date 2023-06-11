const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', {title: "Playground's rule"});
});

/* GET Sign in and Sign up */
router.get('/signin', function(req, res, next) {
  res.render('login.html', {title: 'Welcome back'});
});

router.get('/signup', function(req, res, next) {
  res.render('register.html', {title: 'Welcome to the game'});
});
/*GET dashboard */
router.get('/dashboard', function(req, res, next){
  res.render('dashboard.html', {title:'Dashboard'});
})
module.exports = router;
