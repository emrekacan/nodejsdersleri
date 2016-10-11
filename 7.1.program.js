var http = require("http")

http.get("http://www.emrekacan.net",function (response) {
    response.setEncoding('utf8')
    response.on('data',function (data) {
        console.log(data)
    })
})