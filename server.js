const express = require('express');

let app = express();

const artists = [
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
