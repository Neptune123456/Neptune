// 获取npm提供的express对象
var express = require('express');
// 通过express提供的router获取路由对象
var router = express.Router();
// var test = require('../models/test');
// .get方法对象http请求类型：get，post，delete等等
// 第一个参数是调用已经在app.js里加上的test0.js
// 第二个参数是回调函数，里面指定跳转的模板，即test0.pug
// res.render是跳转的意思
router.get('/',function (req,res) {
    res.render('login',{login : "dawn"});
});
// 模块公开的接口，跳转路由，和第二行代码相呼应
module.exports = router;
