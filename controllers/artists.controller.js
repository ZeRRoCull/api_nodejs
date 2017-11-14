const Artists = require('../models/artists');

exports.all = function (req, res) {
    Artists.all(function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(result);
    });
};

exports.insert = function(req, res) {
    let artist = {
        name: req.body.name
    };
    Artists.insert(artist,function (err,result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(result);
    });
};

exports.findById = function(req, res) {
    Artists.findById(req.params.id,function(err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(result);
    });
};

exports.updateById = function (req, res) {
    Artists.updateById(req.params.id,{
        name: req.body.name
    },function(err) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(200);
    });
};

exports.delete = function(req, res) {
    Artists.delete(req.params.id,function(err) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    });
};