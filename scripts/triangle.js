

class Triangulo{
    constructor (base, ladoA, ladoB){
        this.base = base;
        this.ladoA = ladoA;
        this.ladoB = ladoB;
    }
    isValid(){
        if(this.ladoA < this.ladoB + this.base && this.ladoB < this.ladoA + this.base && this.base < this.ladoA + this.ladoB){
            return true
        }
        return false;
    }
    perimetro(){
        return this.base + this.ladoA + this.ladoB
    }
    
}