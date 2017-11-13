module.exports = function (ayarlar) {
    return function (req, res, next) {
        if (ayarlar.tarih) {
            var tarih = new Date();
            var formatliTarih = tarih.getDate() + "." + (tarih.getMonth() + 1) + "." + tarih.getFullYear();
            formatliTarih += " " + tarih.getHours() + ":" + tarih.getMinutes();
            console.log(formatliTarih + ':Yeni istek')
        } else {
            console.log('Yeni istek')
        }
        next()
    }
}
