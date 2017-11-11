const express = require('express');

let app = express();

app.get('/',function (req, res) {
    res.send('Hello API');
});

app.listen(3000,function () {
    console.log('Express server is run!');
});
