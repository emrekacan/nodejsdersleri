var express=require('express');
var app=express();

app.get('/',function (req,res) {
    res.send('Ana Sayfa!');
});

app.use(express.static('public'));

app.use('/js',express.static('static'));

app.listen(3000,function () {
    console.log('Uygulama 3000 portunda çalışmakta.')
});