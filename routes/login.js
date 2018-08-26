// var express = require('express');
// var router = express.Router();
// var test = require('../models/test');//引入
// /*GET home page*/
// router.get('/',function (req,res) {//参数1是test.js,参数2是回调函数，如果写了两个get，第一个参数url或者请求类型不能相同
//
//     res.render('login',{dawn:"welcome"});//跳转指定模板
// });
// router.post('/',function (req,res) {
//     test.findOne({//传数据
//         "name":req.body.meuserna,
//         "email":req.body.password
//     },function (err,test) {
//         console.log(test);
//         res.render('index',{id:test._id,title:"首页"})
//     });
// });
// module.exports = router;//模块公开接口




var express = require('express');
var router = express.Router();
var zara = require('../models/zara');//引入

router.post('/',function (req,res) {
    zara.findOne({
        "name":req.body.username,//form表单的值
        "email":req.body.password
    },
        function (err,zara) {
        if(zara == undefined){
            //登录不成功
            req.flash('error','用户名或密码不正确');//app.js定义
            // res.render('login')
            return res.redirect('login');
        }else {
            req.flash('info', '登录成功');//只能和重定向使用
            return res.redirect('page');//重定向通过路由重新定向，参数不是模板名称而是路径，只存一次
            // res.render('page',{dawn:"welcome"});
        }
            res.render('page',{dawn:"welcome"});
    });
});
/*GET home page*/
router.get('/',function (req,res) {

    res.render('login',{dawn:"welcome"});
});
module.exports = router;
