var mongodb = require('./db');
var result = require('./result');
function Information(information) {
    this.id = information.id;
    this.name = information.name;
    this.img = information.img;
    this.img1 = information.img1;
    this.img2 = information.img2;
    this.img3 = information.img3;
    this.img4 = information.img4;
    this.inf = information.inf;
    this.style = information.style;
    this.color =information.color;
    this.price =information.price;
}

module.exports = Information;
// Information.findOne = function (information,callback) {
//     mongodb.open(function (err,db) {
//         if(err)callback(err);
//         db.collection('information',function (err,collection) {
//             if(err){
//                 mongodb.close();
//                 return callback(err);
//             }
//             collection.findOne({
//                 name:information.name,
//                 img:information.img,
//                 inf:information.inf,
//                 style:information.style,
//                 color:information.color
//             },function (err,test) {
//                 mongodb.close();
//                 if(test) return callback(null,test);
//                 return callback(err);
//             })
//
//         })
//
//     })
// };

Information.findWhere = function(information,callback){
    mongodb.open(function(err,db){
        if(err) return callback(err);
        db.collection('information',function(err,collection){
            if(err){
                mongodb.close();
                return callback(err);
            }
            collection.find({
                id:information.id
            }).toArray(function(err,test){
                mongodb.close();
                if(err) return callback(err);
                return callback(null,test);
            })
        })
    })
};
Information.findAll = function(callback){
    mongodb.open(function (err, db) {
        if(err) return callback(err);
        db.collection('information', function (err, collection) {
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


Information.findPage = function(skip,callback){
    mongodb.open(function(err,db){
        if(err) return callback(err);
        db.collection('information',function(err,collection){
            if(err){
                mongodb.close();
                return callback(result({err:err}));
            }
            collection.find({}).skip(parseInt(skip)).limit(4).toArray(function(err,proInfo){
                mongodb.close();
                return callback(result({
                    err:err,
                    info:proInfo
                }))
            })
        })
    })
};