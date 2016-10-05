var fs=require("fs");

var callback1 = function (hata,dosyaIcerigi) {
    if (hata) {
        console.log("Bir hata oluştu.")
        return;
    }
    fs.writeFile(process.argv[3], dosyaIcerigi, callback2);
    console.log("Dosya okuma işlemi bitti.");
}

var callback2=function (hata) {
    if (hata) {
        console.log("Bir hata oluştu.")
        return;
    }
    console.log("Dosya yazma işlemi bitti.")
}

fs.readFile(process.argv[2],callback1);
console.log("Program devam ediyor...");