"use strict";
exports.__esModule = true;
exports.Triangulo = void 0;
var clasePunto_1 = require("./clasePunto");
var Triangulo = /** @class */ (function () {
    function Triangulo(p1, p2, p3) {
        this.v1 = p1;
        this.v2 = p2;
        this.v3 = p3;
    }
    Triangulo.prototype.calcularLongitudLados = function () {
        var distancias = [];
        distancias.push(this.v1.calcularDistancia(this.v2));
        distancias.push(this.v2.calcularDistancia(this.v3));
        distancias.push(this.v3.calcularDistancia(this.v1));
        return distancias;
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
var punto1 = new clasePunto_1.Punto(0, 0);
var punto2 = new clasePunto_1.Punto(0, 3);
var punto3 = new clasePunto_1.Punto(4, 0);
var triangulo1 = new Triangulo(punto1, punto2, punto3);
console.log(triangulo1.calcularLongitudLados());
