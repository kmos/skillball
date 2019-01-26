var express = require('express');
var router = express.Router();
var logger = require('heroku-logger');

/* post black listing. */
router.post('/one_click', function(req, res, next) {

  logger.info("one click from black!");
  res.send("ok");
});


/* post black listing. */
router.post('/double_click', function(req, res, next) {

  logger.info("double click from black!");
  res.send("ok");
});


/* post black listing. */
router.post('/long_click', function(req, res, next) {
  logger.info("long click from black!");
  res.send("ok");
});


module.exports = router;