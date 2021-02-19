import {Punto} from "./clasePunto"
export class Triangulo
{
    private v1:Punto;
    private v2:Punto;
    private v3:Punto;
    constructor(p1:Punto,p2:Punto,p3:Punto)
    {
        this.v1 = p1
        this.v2 = p2
        this.v3 = p3
    }
   public calcularLongitudLados():number[]
   {
    let distancias:number[] =[];
    
        distancias.push(this.v1.calcularDistancia(this.v2))
        distancias.push(this.v2.calcularDistancia(this.v3))
        distancias.push(this.v3.calcularDistancia(this.v1))
​
     return distancias;
    }
}

let punto1 : Punto = new Punto (0,0)
let punto2 : Punto = new Punto (0,3)
let punto3 : Punto = new Punto (0,4)
let triangulo1 : Triangulo = new Triangulo(punto1,punto2,punto3)
console.log(triangulo1.calcularLongitudLados())
