var m1 = require('./Matematik');

var t1 = m1.Topla(process.argv[2], process.argv[3]);

var t2 = m1.Cikar(t1, process.argv[4]);

var t3 = m1.Carp(t2, process.argv[5]);

var t4 = m1.Bol(t3, process.argv[6]);

console.log(t1, t2, t3, t4);