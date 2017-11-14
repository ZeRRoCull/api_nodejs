const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const artistsController = require('./controllers/artists.controller');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/',function (req, res) {
    res.send('Hello API');
});

app.route('/artists')
    .get(artistsController.all)
    .post(artistsController.insert);

app.route('/artists/:id')
    .get(artistsController.findById)
    .put(artistsController.updateById)
    .delete(artistsController.delete);


db.connect('mongodb://localhost:27017/myapi',function (err) {
    if (err) return console.error(err);

    app.listen(3000,function () {
        console.log('Express server is run!');
    });
});
