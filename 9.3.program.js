var express=require('express');
var app=express();

app.get('/',function (req,res) {
    res.send('Ana Sayfa!');
});

app.all('/sayfahepsi',function (req,res) {
    res.send('Sayfa Hepsi!');
});

app.get('/ab?cd',function (req,res) {
    res.send('Sayfa ab?cd!');
});

app.get('/de+fg',function (req,res) {
    res.send('Sayfa de+fg!');
});

app.get('/hi*jk',function (req,res) {
    res.send('Sayfa hi*jk!');
});

app.get('/sayfa/:degisken1/parametre/:degisken2', function(req, res) {
    res.send(req.params);
});

app.listen(3000,function () {
    console.log('Uygulama 3000 portunda çalışmakta.')
});