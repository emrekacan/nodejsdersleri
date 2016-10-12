var http = require("http")
var url = require("url")
var fs = require("fs")

var server = http.createServer(function (request, response) {
    var urlObject = url.parse(request.url)
    if (urlObject.pathname == '/ornek1') {
        fs.createReadStream('ornek1.html').pipe(response)
    } else if (urlObject.pathname == '/ornek2') {
        fs.createReadStream('ornek2.html').pipe(response)
    }
    else {
        fs.createReadStream('ornek.html').pipe(response)
    }
})
server.listen(8080)
console.log("Server Başlatıldı. Tarayıcı üzerinden http://localhost:8080 adresinden ulaşabilirsiniz.")