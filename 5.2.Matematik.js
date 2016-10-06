var Mat = function () { };

Mat.prototype.Topla = function (a, b) {
    return Number(a) + Number(b);
}

Mat.prototype.Cikar = function (a, b) {
    return Number(a) - Number(b);
}

Mat.prototype.Carp = function (a, b) {
    return Number(a) * Number(b);
}

Mat.prototype.Bol = function (a, b) {
    return Number(a) / Number(b);
}

module.exports = new Mat();