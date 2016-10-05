var fs=require("fs");

var callback1 = function (hata,dosyaIcerigi) {
    if (hata) {
        console.log("Bir hata oluştu.")
        return;
    }
    var satirlar=dosyaIcerigi.toString().split("\n");
    console.log(satirlar.length);
}

fs.readFile(process.argv[2],callback1);
console.log("Program devam ediyor...");