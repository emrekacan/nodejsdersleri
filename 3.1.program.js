// fs modülünü çağırıyoruz
var fs=require("fs");

//dosyamızın yolunu verip içeriğini değişkene atıyoruz
var dosyaIcerigi=fs.readFileSync("D:\\nodejsdersleri\\ornekdosya.txt");

//dosya içeriğimizi ekrana yazdırıyoruz.
console.log(dosyaIcerigi.toString());
