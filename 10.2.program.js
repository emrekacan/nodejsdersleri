var express = require('express');
var logger = require('./logger-middleware')

var app = express();

app.use(logger({ tarih: true }));

app.get('/', function (req, res) {
    res.send('Merhaba Dünya!');
});

app.listen(3000, function () {
    console.log('Uygulama 3000 portunda çalışmakta.')
});