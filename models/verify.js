var mongodb = require('./db');
var result = require('./result');
function Client(client){
    this.id = client.id;
    this.name = client.name;
    this.email = client.email;
    this.pwd = client.pwd;
    this.postcode = client.postcode;
    this.number = client.number;
}
module.exports = Client;
Client.register = function(client,callback){
    mongodb.open(function(err,db) {
        if (err)
            return callback(result({
                err:err,
                isSuccess:0
            }));
        db.collection('client', function (err, collection) {
            if(err){
                mongodb.close();
                return callback(result({
                    err:err,
                    isSuccess:0
                }));
            }
            collection.findOne({
                name : client.name
            },function(err,userResult){
                if(userResult != null){
                    mongodb.close();
                    return callback(result({
                        error:"注册用户已经存在",
                        isSuccess:0
                    }));
                }
                collection.insertOne({
                    name : client.name,
                    email:client.email,
                    pwd : client.pwd,
                    postcode:client.postcode,
                    telephone : client.telephone
                },function(err,info){
                    mongodb.close();
                    return callback(result({
                        err:err,
                        info:info,
                        isSuccess:err == null && info.insertedCount == 1 ? 1 : 0
                    }));
                })
            })
        })
    })
};