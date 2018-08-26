var express = require('express');
var router = express.Router();
var client = require('../models/verify');

router.get('/',function (req,res) {
    res.render('register',{login : "princess"});
});

router.post('/',function (req,res) {
    if(req.body != null){
        client.register({
            "name":req.body.name,
            "email":req.body.email,
            "pwd":req.body.pwd,
            "postcode":req.body.postcode,
            "number":req.body.number
        },function(result){
            if (result != null && result != undefined){
                if(result.isSuccess == 1){
                    res.redirect('page');
                }else{
                    if(result.error != null){
                        req.flash("error",result.error);
                    }else{
                        req.flash("error","用户注册失败，请稍后重试！");
                    }
                    res.redirect("register");
                }
            }else{
                req.flash("用户注册失败，请稍后重试！");
                res.redirect("register");
            }
        })
    }
});



module.exports = router;