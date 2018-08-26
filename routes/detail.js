var express = require('express');
var router = express.Router();
var find = require('../models/information');
/* GET users listing. */
router.get('/', function(req, res,next) {
    var Id = req.query.id;
    console.log(Id);
    find.findWhere({
       "id":Id
    },function(err,test){
        console.log(test);
        res.render('detail',{test:test});
    });
});


module.exports = router;
