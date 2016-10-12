var http = require("http")
var url = require("url")

var server = http.createServer(function (request, response) {
    var urlObject = url.parse(request.url)
    var zaman=new Date()


    if (urlObject.pathname == '/tarih') {
        var tarih={ 
            yil:zaman.getFullYear(),
            ay:zaman.getMonth()+1,
            gun:zaman.getDate() 
        };
        response.end(JSON.stringify(tarih))
    } else if (urlObject.pathname == '/saat') {
        var saat={ 
            saat:zaman.getHours(),
            dakika:zaman.getMinutes(),
            saniye:zaman.getSeconds() 
        };
        response.end(JSON.stringify(saat))
    }
    else {
        response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        response.write("Lütfen saati öğrenmek için /saat ,")
        response.write("tarihi öğrenmek için /tarih adreslerini kullanınız.")
        response.end()
    }
})
server.listen(8080)
console.log("Server Başlatıldı. Tarayıcı üzerinden http://localhost:8080 adresinden ulaşabilirsiniz.")