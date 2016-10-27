var express=require('express');
var app=express();

app.get('/',function (req,res) {
    res.send('Merhaba Dünya!');
});

app.listen(3000,function () {
    console.log('Uygulama 3000 portunda çalışmakta.')
});