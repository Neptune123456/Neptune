var mongodb = require('./db');
var result = require('./result');
function Product(product) {
    this.id = product.id;
    this.img = product.img;
}
module.exports = Product;

Product.findAll = function(callback){
    mongodb.open(function (err, db) {
        if(err) return callback(err);
        db.collection('product', function (err, collection) {
            if(err){
                mongodb.close();
                return callback(err);
            }
            collection.find({}).toArray(function (err, result) {
                mongodb.close();
                if(err) return callback(err);
                return callback(null, result);
            })
        })
    })
};

// Product.findPage = function (skip,callback) {
//     mongodb.open(function (err, db) {
//         if(err) return callback(err);
//         db.collection('product', function (err, collection) {
//             if(err){
//                 mongodb.close();
//                 return callback(result({err:err}));
//             }
//             collection.find({}).skip(parseInt(skip)).limit(2).toArray(function (err, proInfo) {
//                 mongodb.close();
//                 return callback(result({
//                     err:err,
//                     info:proInfo
//                 }))
//             })
//         })
//     })
// };

Product.findPage = function(skip,callback){
    mongodb.open(function(err,db){
        if(err) return callback(err);
        db.collection('product',function(err,collection){
            if(err){
                mongodb.close();
                return callback(result({err:err}));
            }
            collection.find({}).sort().skip(parseInt(skip)).limit(2).toArray(function(err,proInfo){
                mongodb.close();
                return callback(result({
                    err:err,
                    info:proInfo
                }))
            })
        })
    })
};
