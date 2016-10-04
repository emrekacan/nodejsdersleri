var fs=require("fs");

// Dosya ismini ve içeriğini konsoldan alıyoruz
var dosyaAdi=process.argv[2]
var yazi=process.argv[3]

//Dosyamızın içerisine yazımızı yazıyoruz
fs.writeFileSync(dosyaAdi,yazi)