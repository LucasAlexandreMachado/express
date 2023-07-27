var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', function(req, res, next) {
  res.send('Iu are sou col!');
});

router.get('/cool/beach', function(req, res, next) {
  res.send('i like beach!');
});

router.get('/ifc', function(req, res, next) {
  res.send('Wellcome to ifc!');
});


module.exports = router;
