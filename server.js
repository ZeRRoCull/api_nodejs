const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

let app = express();
let db;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let artists = [
    {
        id: 1,
        name: 'Metallica'
    },
    {
        id: 2,
        name: 'Queen'
    },
    {
        id: 3,
        name: 'Aria'
    },
    {
        id: 4,
        name: 'ArminVanBuuren'
    }
];

app.get('/',function (req, res) {
    res.send('Hello API');
});

app.route('/artists').get(function (req, res) {
        db.collection('artists').find().toArray(function (err, result) {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.send(result);
        });
    }).post(function(req, res) {
        let artist = {
            name: req.body.name
        };
        db.collection('artists').insert(artist,function (err, result) {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.send(artist);
        });
    });

app.route('/artists/:id').get(function (req, res) {
        db.collection('artists').findOne({_id:ObjectID(req.params.id)},function (err, artist) {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.send(artist);
        });
    }).put(function(req,res){
        db.collection('artists').updateOne({
            _id: ObjectID(req.params.id),
        },{
            name: req.body.name
        },function (err, result) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            }
            res.send(200);
        });
    }).delete(function (req, res) {
        const id = Number(req.params.id);
        artists = artists.filter(function (artist) {
            return artist.id !== id;
        });
        res.send(artists);
    });

MongoClient.connect('mongodb://localhost:27017/myapi',function (err, database) {
    if (err) return console.error(err);

    db = database;
    app.listen(3000,function () {
        console.log('Express server is run!');
    });
});
