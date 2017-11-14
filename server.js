const express = require('express');
const bodyParser = require('body-parser');
const ObjectID = require('mongodb').ObjectID;
const db = require('./db');
const artistsController = require('./controllers/artists.controller');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/',function (req, res) {
    res.send('Hello API');
});

app.route('/artists').get(artistsController.all).post(artistsController.insert);

app.route('/artists/:id').get(function (req, res) {
        db.get().collection('artists').findOne({_id:ObjectID(req.params.id)},function (err, artist) {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.send(artist);
        });
    }).put(function(req,res){
        db.get().collection('artists').updateOne({
            _id: ObjectID(req.params.id),
        },{
            name: req.body.name
        },function (err, result) {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.send(200);
        });
    }).delete(function (req, res) {
        db.get().collection('artists').deleteOne({
            _id: ObjectID(req.params.id)
        },function (err, result) {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        });
    });

db.connect('mongodb://localhost:27017/myapi',function (err) {
    if (err) return console.error(err);

    app.listen(3000,function () {
        console.log('Express server is run!');
    });
});
