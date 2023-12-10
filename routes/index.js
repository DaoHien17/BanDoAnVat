var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
router.get('/mobj', function (req, res) {
  var mobj = [
    { 'id': 1, 'name': 'Buoi', 'gia': 10000 },
    { 'id': 2, 'name': 'cam', 'gia': 3000 },
    { 'id': 3, 'name': 'quat', 'gia': 200 },
    { 'id': 4, ' name': 'quit', 'gia': 500 },
    { 'id': 5, 'name': 'Phat thu', 'gia': 5000 }
  ];
  res.json(mobj);
});

