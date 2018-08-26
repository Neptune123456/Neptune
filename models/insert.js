var mongodb = require('./db');

function Test(test) {
    this.id = test.id;
    this.name = test.name;
    this.age = test.age;
    this.email = test.email;
}

module.exports = Test;
Test.findAll = function(callback){
    mongodb.open(function (err, db) {
        if(err) return callback(err);
        db.collection('test', function (err, collection) {
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


Test.insertMany = function(testArray, callback){
    mongodb.open(function (err, db) {
        if(err) return callback(err);
        db.collection('test',function (err, collection) {
            if(err){
                mongodb.close();
                return callback(err);
            }
            // var insertArray = new Array();
            // for(var i in testArray){
            //     insertArray.push({
            //         name: testArray[i].name,
            //         email: testArray[i].email,
            //         age: testArray[i].age
            //     });
            // }
            collection.insertMany(insertArray,function (err, insertNumber) {
                mongodb.close();
                if(err) return callback(err);
            })
        })
    })
}

Test.insertOne =function(test,callback){
    mongodb.open(function (err, db) {
        if (err) callback(err);
        db.collection('test', function (err, connection) {
            if (err) {
                mongodb.close();
                return callback(err);
            }
            connection.insertOne({
                name: test.name,
                email: test.email,
                age: test.age
            }, function (err, aa) {
                mongodb.close();
                // if (aa) return callback(null, aa);
                if(err) return callback(err);
            })
        })
    })
};

Test.findOne = function (test, callback) {
    mongodb.open(function (err, db) {
        if (err) callback(err);
        db.collection('test', function (err, connection) {
            if (err) {
                mongodb.close();
                return callback(err);
            }
            connection.findOne({
                name: test.name,
                email: test.email
            }, function (err, aa) {
                mongodb.close();
                if (aa) return callback(null, aa);
                callback(err);
            })
        })
    })
};