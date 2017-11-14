let db = require('../db');

exports.all = function (callback) {
    db.get().collection('artists').find().toArray(function(err, result) {
       callback(err,result);
    });
};

exports.insert = function (data,callback) {
    db.get().collection('artists').insert(data,function (err, result) {
        callback(err,result);
    });
};