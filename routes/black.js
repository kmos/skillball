var express = require('express');
var router = express.Router();
var logger = require('heroku-logger');
var wss = require('../bin/www');

/* post black listing. */
router.post('/one_click', function(req, res, next) {

  logger.info("one click from black!");
  res.send("ok");

  if(wss){
    wss.on("connection", function(ws) {

      ws.send("{\n" + "  \"player\": 0,\n" +
        "  \"move\": \"left\"\n" +
        "}");

    });
  }

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