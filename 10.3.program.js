var express = require('express');
var app = express();
var router = express.Router();
var cookieParser = require('cookie-parser')

// Application-level middleware
app.use(function (req, res, next) {
    console.log(Date.now() + ': Yeni istek, Method:' + req.method + ', URL:' + req.originalUrl)
    next();
});

app.get('/', function (req, res, next) {
    res.send('Merhaba Dünya!');
    next();
});

app.get('/', function (req, res, next) {
    res.send('Ana Sayfa');
});

// Router-level middleware
router.use(function (req, res, next) {
    console.log('Yeni istek(Router-level middleware):', Date.now());
    next();
})

app.use('/', router)

// Error-handling middleware
app.use(function (err, req, res, next) {
    console.error("Hata:" + err.stack);
    res.status(500).send('Bir hata oluştu!');
});

// Built-in middleware
app.use(express.static('public'));

// Third-party middleware
app.use(cookieParser());

app.listen(3000, function () {
    console.log('Uygulama 3000 portunda çalışmakta.');
});