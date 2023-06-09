const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', {title: 'welcome to the game'});
});

/* GET Sign in and Sign up */
router.get('/signin', function(req, res, next) {
  res.render('login.html');
});

router.get('/signup', function(req, res, next) {
  res.render('register.html');
});

module.exports = router;
