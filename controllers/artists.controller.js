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
        res.send(result);
    });
};