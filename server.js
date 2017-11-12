const express = require('express');
const bodyParser = require('body-parser');

let app = express();
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

app.get('/artists',function (req, res) {
    res.send(artists);
});

app.post('/artists',function(req, res) {
    let artist = {
        id: Date.now(),
        name: req.body.name
    };
    artists.push(artist);
    res.send(artist);
});

app.put('/artists/:id',function(req,res){
    let artist = artists.find(function(artist) {
        return artist.id == Number(req.params.id);
    });
    artist.name = req.body.name;
    res.sendStatus(200);
});

app.delete('/artists/:id',function (req, res) {
    const id = Number(req.params.id);
    artists = artists.filter(function (artist) {
        return artist.id !== id;
    });
    res.send(artists);
});

app.get('/artists/:id',function (req, res) {
    const id = Number(req.params.id);
    artists.forEach(function(artist) {
        if (artist.id == id) {
            res.send(artist);
        }
    });
});

app.listen(3000,function () {
    console.log('Express server is run!');
});
