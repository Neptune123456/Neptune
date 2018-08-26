var express = require('express');
var router = express.Router();
var find = require('../models/information');
router.get('/', function(req, res,next) {
    find.findAll(function (err, test) {
        console.log(test);
        res.render('classify',{test:test});
    })
});

router.post('/postAjax',function(req,res){
    if(global.isFlag != 1){
        global.isFlag = 1;
        find.findPage(req.body.skip,function(result){
            // if(err)  return result.json(err);
            global.isFlag = 0;
            res.json(result.info);
        });
    }else{
        res.json(null);
    }
});
module.exports = router;