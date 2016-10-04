var fs=require("fs");

//Dosya yolunu konsoldan alıyoruz
var dosyaIcerigi=fs.readFileSync(process.argv[2]);

//Elde etmiş olduğumuz yazımızı satırlara ayırıyoruz
var satirlar=dosyaIcerigi.toString().split("\n");

//Satır sayısını ekrana yazdırıyoruz.
console.log(satirlar.length);
