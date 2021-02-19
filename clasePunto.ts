export class Punto 
{
    private x:number
    private y:number

        constructor (x:number, y:number)
        {
            this.x = x;
            this.y = y;
        }
        public getX():number
        {
            return this.x
        }
        public getY():number
        {
            return this.y
        }
        public setY(y:number)
        {
            this.y = y;
        }
        public setX(x:number)
        {
            this.x= x;
        }
        public toString():string
        {
        return "("+this.x.toString()+ ","+ this.y.toString()+ ")" 
        }
        public distanciaAlOrigen():number
        {
            let distancia : number = 0
            distancia = Math.round(Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2)))
            return distancia;
        }
        public calcularDistancia(puntoB:Punto):number
        {
            let distanciaA : number = 0
            distanciaA = Math.sqrt(Math.pow((puntoB.x-this.x),2)+Math.pow((puntoB.y-this.y),2))
            return distanciaA;
        }        
        public calcularCuadrante():number
        { let cuadrante:number;
            if((this.x=0)||(this.y=0))
            {
                cuadrante=0
            }
            else if((this.x>0)&&(this.y>0))
            {
                cuadrante = 1
            }
            else if((this.x<0)&&(this.y>0))
            {
                cuadrante = 2
            }
            else if((this.x<0)&&(this.y<0))
            {
                cuadrante = 3
            }
            else if((this.x>0)&&(this.y<0))
            {
                cuadrante = 4
            }
                return cuadrante;
        }
        public calcularMasCercano(puntos:Punto[]):Punto
        { 
            let distancia:number = Number.MAX_VALUE
            let  distanciaMasCorta: Punto
            for(let i=0; i<puntos.length;i++)
            {
                if(this.calcularDistancia(puntos[i])<distancia)
                {
                    distancia = this.calcularDistancia(puntos[i])
                    distanciaMasCorta = puntos[i]
                }
            } return distanciaMasCorta
        }

}

