var http = require("http")

var server = http.createServer(function (request, response) {
    var tarih = new Date();
    var formatliTarih = tarih.getDate() + "." + (tarih.getMonth() + 1) + "." + tarih.getFullYear();
    formatliTarih += " " + tarih.getHours() + ":" + tarih.getMinutes();
    console.log(formatliTarih)
    response.end(formatliTarih)
})
server.listen(8080)
console.log("Server Başlatıldı. Tarayıcı üzerinden http://localhost:8080 adresinden ulaşabilirsiniz.")