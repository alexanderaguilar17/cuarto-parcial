class Animal{
    constructor(nombre,tipo){
        this.nombre=nombre
        this.tipo=tipo
    }
    comer(){
        console.log("el animal esta comiendo ")
    }
}
class carnivoro extends Animal{
    constructor(nombre,tipo){
        super(nombre,tipo)
        this.dieta="carne"
    }
    comer(){
        console.log("el "+this.nombre+" esta comiendo " +this.dieta)
    }
    comer(){
        console.log("el "+this.nombre+" esta comiendo " +this.dieta)
    }

}
class herviboro extends Animal{
    constructor(nombre,tipo){
        super(nombre,tipo)
        this.dieta="plantas"
  }
  comer(){
    console.log("el "+this.nombre+" esta comiendo " +this.dieta)
}
comer(){
    console.log("el "+this.nombre+" esta comiendo " +this.dieta)
}
 }
 class omnivoro extends Animal{
    constructor(nombre,tipo){
        super(nombre,tipo)
        this.dieta="todo"
        
        }
        comer(){
            console.log("el "+this.nombre+" esta comiendo " +this.dieta)
        }
        comer(){
            console.log("el "+this.nombre+" esta comiendo " +this.dieta)
        }
         }

var leon = new carnivoro("Leon","felino")
leon.comer()
var lobo = new carnivoro("lobo","canino")
lobo.comer()
var vaca = new herviboro("vaca","granja")
vaca.comer()
var tucan = new herviboro("tucan","ave")
tucan.comer()
var huron = new omnivoro("huron","mamifero")
huron.comer()
var oso= new omnivoro("oso","polar")
oso.comer()