var express = require('express');
var router = express.Router();
var test = require('../models/test');
/* GET home page. */
 //router.get('/',function (req,res) {
//找到所有数据




//     test.findLimit{
//         skip:2,
//         limit:4
//     }.function(err,result){
//
//     }




//     zara.findWhere({name:"1111"},function(err,result){
//         console.log(result)
//     });
//
//     // zara.findAll(function (err, result) {
//     //     console.log(result);
//     // });
//     res.render('index',{login : "princess"});
// });
// module.exports = router;

//     test.updateOne({name: "1111"}, {name: "9989"}, function (err, result) {
//         console.log(result)
//     });
//     res.render('index', {login: "princess"});
// });
// module.exports = router;




//找到一条

// router.get('/',function (req,res) {
//     zara.findOne({
//         "name":"2222",
//         "email":"2222"
//     },function(err,zara){
//         console.log(zara);
//     });
//     res.render('index',{login : "princess"});
// });
// module.exports = router;

//插入一条
// router.get('/',function (req,res) {
//     zara.insertOne({
//         "name":"4444",
//         "email":"4444",
//         "age" : "45"
//     },function(err){
//         console.log(err);
//     });
//     res.render('index',{login : "princess"});
// });
// module.exports = router;


//插入多条
// router.get('/',function (req,res) {
//     zara.insertMany([{
//         name:"555",
//         email:"4544",
//         age : 415
//     },{
//         name:"4664",
//         email:"49844",
//         age : 455
//     }],function(err,number){
//         console.log(err);
//     });
//     res.render('index',{login : "princess"});
// });
// module.exports = router;


router.get('/',function (req,res,next) {
    // test.findOne({
    //     "name":"333",
    //     "email":"333"
    // },function (err,test) {
    //     console.log("test")
    // });
        res.render('index',{dawn:"welcome"});
    });
module.exports = router;

