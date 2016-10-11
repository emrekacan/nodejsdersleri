var http = require("http")

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')
    response.on('data', function (data) {
        console.log(data)
    })
    response.on('end', function () {
        console.log('Yüklenme işlemi bitti.')
    })
    response.on('error', function (hata) {
        console.log('Yüklenme sırasında bir hata oluştu:' + hata.message)
    })
})
.on('error', function (hata) {
    console.log("Açılma sırasında bir hata oluştu." + hata.message)
})