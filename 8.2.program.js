var http = require("http")
var fs=require("fs")

var server = http.createServer(function (request, response) {
    fs.createReadStream("ornek.html").pipe(response)
})
server.listen(8080)
console.log("Server Başlatıldı. Tarayıcı üzerinden http://localhost:8080 adresinden ulaşabilirsiniz.")