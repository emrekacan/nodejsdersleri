var fs=require("fs");

fs.readFile(process.argv[2],function (hata,dosyaIcerigi) {
    if (hata) {
        console.log("Bir hata oluştu.")
        return;
    }
    fs.writeFile(process.argv[3], dosyaIcerigi, function (hata) {
        if (hata) {
            console.log("Bir hata oluştu.")
            return;
        }
        console.log("Dosya yazma işlemi bitti.")
    });
    console.log("Dosya okuma işlemi bitti.");
});
console.log("Program devam ediyor...");