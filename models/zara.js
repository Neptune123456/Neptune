var mongodb = require('./db');
function Zara(zara) {
    this.id = zara.id;
    this.name = zara.name;
    this.email = zara.email;
}

module.exports = Zara;





//找到所有数据
// Zara.findAll = function(callback){
//     mongodb.open(function (err, db) {
//         if(err) return callback(err);
//         db.collection('zara', function (err, collection) {
//             if(err){
//                 mongodb.close();
//                 return callback(err);
//             }
//             collection.find({name:zara.name}).toArray(function (err, result) {
//                 mongodb.close();
//                 if(err) return callback(err);
//                 return callback(null, result);
//             })
//         })
//     })
// };


//找到一条
Zara.findOne = function (zara, callback) {
    mongodb.open(function (err, db) {
        if (err) callback(err);
        db.collection('zara', function (err, connection) {
            if (err) {
                mongodb.close();
                return callback(err);
            }
            connection.findOne({
                name: zara.name,
                email: zara.email
            }, function (err, aa) {
                mongodb.close();
                if (aa) return callback(null, aa);
                callback(err);
            })
        })
    })
};


// Zara.insertOne =function(zara,callback){
//     mongodb.open(function (err, db) {
//         if (err) callback(err);
//         db.collection('zara', function (err, connection) {
//             if (err) {
//                 mongodb.close();
//                 return callback(err);
//             }
//             connection.insertOne({
//                 name: zara.name,
//                 email: zara.email,
//                 age: zara.age
//             }, function (err, aa) {
//                 mongodb.close();
//                 // if (aa) return callback(null, aa);
//                 if(err) return callback(err);
//             })
//         })
//     })
// };


// Zara.insertMany = function(zaraArray, callback){
//     mongodb.open(function (err, db) {
//         if(err) return callback(err);
//         db.collection('zara',function (err, collection) {
//             if(err){
//                 mongodb.close();
//                 return callback(err);
//             }
//             var insertArray = new Array();
//             for(var i in zaraArray){
//                 insertArray.push({
//                     name: zaraArray[i].name,
//                     email: zaraArray[i].email,
//                     age: zaraArray[i].age
//                 });
//             }
//             collection.insertMany(insertArray,function (err, insertNumber) {
//                 mongodb.close();
//                 if(err) return callback(err);
//             })
//         })
//     })
// };
//修改一条
// Test.updateMany() = function (zara, callback) {
//     mongodb.open(function (err, db) {
//         if (err) callback(err);
//         db.collection('zara', function (err, connection) {
//             if (err) {
//                 mongodb.close();
//                 return callback(err);
//             }
//              connection.find({name:test.name})


//db.集合.update（where,update,(如果没有查到大数据是否插入新址，是否修改多条，错误类型)
