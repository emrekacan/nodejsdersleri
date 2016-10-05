var fs=require("fs");
var dosyaIcerigi=fs.readFile(process.argv[2]);
console.log("Program devam ediyor...");
var satirlar=dosyaIcerigi.toString().split("\n");
console.log(satirlar.length);
