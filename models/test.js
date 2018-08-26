var mongodb = require('./db');//引入db.js，引入数据库即是实例
function Test(test){//Test构造函数，同参数名一致

    this.id = test.id;//用本项目里的对象接收
    this.name = test.name;
    this.age = test.age;
    this.email = test.email;
    this.skip = test.skip;
    this.limit = 10;
}
module.exports = Test;


//找到一条
// Test.findOne = function (test,callback) {
//     mongodb.open(function (err,db) {
//         if(err)callback(err);
//         db.collection()('test',function (err,connection) {
//             if(err){
//                 mongodb.close();
//                 return callback(err);
//             }
//             connection.findOne({
//                 name:test.name,
//                 email:test.email
//             },function (err,result) {
//                 mongodb.close();
//                 if(result) return callback(null,result);
//                 callback(err);
//             })
//
//         })
//
//     })
// };

//插入一条
Test.insertOne = function (test,callback) {
    mongodb.open(function (err,db) {
        if(err) return callback(err);
        db.collection('test',function (err,connection) {
            if(err){
                mongodb.close();
                return callback(err)
            }
            connection.insertOne({
                name: test.name,
                email:test.email,
                age:test.age
                },function (err,result) {
                mongodb.close();
                if(err) return callback(err);
                }

            )
        })
    })
};




// var test = new Test()//对象
//公开Test函数
// Test.updateOne = function (where,update,callback) {
//     mongodb.open(function (err,db) {
//         if(err)return callback(err);
//         db.collection('test',function (err,collection) {
//             if (err) {
//                 mongodb.close();
//                 return callback(err);
//             }
//
//
// }

//Test.findOne findOne是一个方法，是一个函数，传两个参数，参数1是查询条件，参数2是回调函数
// Test.findOne = function(test,callback){

//     mongodb.open(function(err,db){//打开mongodb
//         if(err) {//有错误就返回错误，
//             callback(err);
//         }
//         //没有错误就返回db
//         db.collection('test',function(err,collection){//参数1集合名称
//             if(err){
//                 mongodb.close();//没有连接上就关闭mongodb,返回错误
//                 callback(err);//如果连接上就返回集合
//             }
//             collection.findOne({//通过findOne方法查询满足条件的返回值
//                 //此处的test是路由传的，同时name和email是要与数据库保持一致
//                 name:test.name,
//                 email:test.email
//             },function(err,test){//回调函数
//                 //这里的test是自己定义的，返回的数据就是test
//                 mongodb.close();//无论出不出错都要关闭
//                 if(err) {
//                     callback(err);
//                 }
//                 if(test) {
//                     callback(null,test);
//                 }
//             })
//         })
//     })
// };

// Test.updateMany() = function (test, fuction(err,)) {
// mongodb.open(function (err, db) {
//     if (err) callback(err);
//     db.collection('test', function (err, connection) {
//         if (err) {
//             mongodb.close();
//             return callback(err);
//         }
//          connection.find({name:test.name});
//


//修改多条
// Test.deleteOne = function (where,callback) {
//
// }
//
//
//     collection.deleteOne({
//     email:where.email
//     }
// })


//排序
// test.findSort = function (callback) {
//
// };
//     mongodb.open(function (err,db) {
//         if (err) return callback(err);
//     db.collection('test', function (err, connection) {
//         if (err) {
//             mongodb.close();
//             return callback(err);
//         }
//          connection.find().sort({age:-1}).toArray(function (err,result) {
//              console.log(result);
//          })
//          })
//     });
// Test.lookup = function () {
//
//
// mongodb.open(function (err, db) {
//     if (err) callback(err);
//     db.collection('order').aggregate ([{
//         $lookup:{
//         from:"pro",
//         localFild:"pro_id",
//         foreign:"id",
//         as:"id"
//         }
//     }]).toArray(function (mongoError) {
//         console.log(result);
//     })
//
//     })
//
