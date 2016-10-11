var http = require("http")

http.get('http://api.openweathermap.org/data/2.5/weather?q=' + process.argv[2] + '&units=metric&appid=02583a7bfd3cd5d870c5fa483017fd61', function (response) {
    response.setEncoding('utf8')

    var sonuc = '';

    response.on('data', function (data) {
        sonuc = sonuc + data;
    })
    response.on('end', function () {
        var jsonSonuc = JSON.parse(sonuc);
        console.log(jsonSonuc.main.temp)
    })
    response.on('error', function (hata) {
        console.log('Yüklenme sırasında bir hata oluştu:' + hata.message)
    })
})
.on('error', function (hata) {
    console.log("Açılma sırasında bir hata oluştu." + hata.message)
})