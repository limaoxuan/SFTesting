/**
 * Created by lee on 2016/12/22.
 */
var express = require('express');
var router = express.Router();
var sfMoviesApiController = require('../controller/sfMoviesApiController');
/* GET home page. */

//getSFMoviesMapInfo
router.post('/getSFMoviesMapInfo', function(req, res, next) {
    sfMoviesApiController.getMapInfo(req,res);
});

router.post('/exchangeLocationToLongitudeAndLatitude',function (req,res,next) {
sfMoviesApiController.exchangeLocationToLongitudeAndLatitude(req,res,next);
});

module.exports = router;
