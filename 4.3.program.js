var fs = require("fs");

fs.readFile(process.argv[2], function (hata, dosyaIcerigi) {
    if (hata) {
        console.log("Bir hata oluştu.")
        return;
    }
    var satirlar = dosyaIcerigi.toString().split("\n");
    console.log(satirlar.length);
});

console.log("Program devam ediyor...");