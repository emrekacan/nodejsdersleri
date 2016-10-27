var express=require('express');
var app=express();

app.get('/',function (req,res) {
    res.send('Ana Sayfa!');
});

app.post('/',function (req,res) {
    res.send('Ana Sayfa Post!');
});

app.get('/Sayfa1',function (req,res) {
    res.send('Sayfa 1!');
});

app.post('/SayfaPost',function (req,res) {
    res.send('Sayfa Post!');
});

app.put('/SayfaPut',function (req,res) {
    res.send('Sayfa Put!');
});

app.delete('/SayfaDelete',function (req,res) {
    res.send('Sayfa Delete!');
});

app.listen(3000,function () {
    console.log('Uygulama 3000 portunda çalışmakta.')
});