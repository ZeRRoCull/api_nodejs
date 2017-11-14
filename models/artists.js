const ObjectID = require('mongodb').ObjectID;
let db = require('../db');

exports.all = function(callback) {
    db.get().collection('artists').find().toArray(function(err, result) {
       callback(err,result);
    });
};

exports.insert = function(data,callback) {
    db.get().collection('artists').insert(data,function (err, result) {
        callback(err,result);
    });
};

exports.findById = function(id, callback) {
    db.get().collection('artists').findOne({_id:ObjectID(id)},function (err, result) {
        callback(err,result);
    });
};

exports.updateById = function(id,data, callback) {
    db.get().collection('artists').updateOne({
        _id: ObjectID(id),
    },data,function (err) {
        callback(err);
    });
};

exports.delete = function(id, callback) {
    db.get().collection('artists').deleteOne({
        _id: ObjectID(id)
    },function (err) {
        callback(err);
    });
};