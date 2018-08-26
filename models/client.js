var mongodb = require('./db');
function Client(client) {
    this.id = client.id;
    this.name = client.name;
    this.email = client.email;
    this.pwd = client.pwd;
    this.postcode = client.postcode;
    this.number = client.number;
}

module.exports = Client;


Client.insertOne = function (client,callback) {
    mongodb.open(function (err,db) {
        if(err) callback(err);
        db.collection('client',function (err,connection) {
            if(err){
                mongodb.close();
                return callback(err);
            }
            connection.insertOne({
                name:client.name,
                email:client.email,
                pwd:client.pwd,
                postcode:client.postcode,
                number:client.number
            },function (err,result) {
                mongodb.close();
                if(err) {
                     callback(null,result);
                     return;
                }
                return callback(err);
            })
        })
    })
};