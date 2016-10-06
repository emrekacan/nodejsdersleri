var m1=require('./modul1');

m1(process.argv[2],function (hata,data) {
    if (hata) {
        console.log("Bir hata oluştu.");
        return;
    }
    console.log(data);
});
