var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/createProject', function(req, res, next){
    res.render('createProject', null)
})

module.exports = router;
