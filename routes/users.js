var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// router.get('/data', function(req, res, next) {
//   res.json({name:'Ron'});
// });
router.post('/data', function(req, res, next) {
  // res.json({name:'Ron'});
  console.log(req.body);
  res.send('OK');
});


module.exports = router;
