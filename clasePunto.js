"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.getY = function () {
        return this.y;
    };
    Punto.prototype.setY = function (y) {
        this.y = y;
    };
    Punto.prototype.setX = function (x) {
        this.x = x;
    };
    Punto.prototype.toString = function () {
        return "(" + this.x.toString() + "," + this.y.toString() + ")";
    };
    Punto.prototype.distanciaAlOrigen = function () {
        var distancia = 0;
        distancia = Math.round(Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)));
        return distancia;
    };
    Punto.prototype.calcularDistancia = function (puntoB) {
        var distanciaA = 0;
        distanciaA = Math.sqrt(Math.pow((puntoB.x - this.x), 2) + Math.pow((puntoB.y - this.y), 2));
        return distanciaA;
    };
    Punto.prototype.calcularCuadrante = function () {
        var cuadrante;
        if ((this.x = 0) || (this.y = 0)) {
            cuadrante = 0;
        }
        else if ((this.x > 0) && (this.y > 0)) {
            cuadrante = 1;
        }
        else if ((this.x < 0) && (this.y > 0)) {
            cuadrante = 2;
        }
        else if ((this.x < 0) && (this.y < 0)) {
            cuadrante = 3;
        }
        else if ((this.x > 0) && (this.y < 0)) {
            cuadrante = 4;
        }
        return cuadrante;
    };
    Punto.prototype.calcularMasCercano = function (puntos) {
        var distancia = Number.MAX_VALUE;
        var distanciamascorta;
        for (var i = 0; i < puntos.length; i++) {
            if (this.calcularDistancia(puntos[i]) < distancia) {
                distancia = this.calcularDistancia(puntos[i]);
                distanciamascorta = puntos[i];
            }
        }
        return distanciamascorta;
    };
    return Punto;
}());
exports.Punto = Punto;
