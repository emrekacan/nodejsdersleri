var express = require('express');
var app = express();

var logger = function (req, res, next) {
    var tarih = new Date();
    var formatliTarih = tarih.getDate() + "." + (tarih.getMonth() + 1) + "." + tarih.getFullYear();
    formatliTarih += " " + tarih.getHours() + ":" + tarih.getMinutes();
    console.log(formatliTarih + ':Yeni istek')
    next()
};

app.use(logger);

app.get('/', function (req, res) {
    res.send('Merhaba Dünya!');
});

app.listen(3000, function () {
    console.log('Uygulama 3000 portunda çalışmakta.')
});