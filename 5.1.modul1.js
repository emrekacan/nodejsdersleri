var fs = require('fs');

module.exports = function (dosyaAdi, callback) {
    var dosyaIcerigi = fs.readFile(dosyaAdi, function (hata, data) {
        if (hata) {
            return callback(hata);
        }
        callback(null, data.toString());
    })
}