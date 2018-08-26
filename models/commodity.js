var mongodb = require('./db');
function Commodity(commodity) {
    this.id = commodity.id;
    this.img = commodity.img;
    this.name = commodity.name;
    this.price = commodity.price;

}
module.exports = Commodity;

Commodity.findAll = function(callback){
    mongodb.open(function (err, db) {
        if(err) return callback(err);
        db.collection('commodity', function (err, collection) {
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