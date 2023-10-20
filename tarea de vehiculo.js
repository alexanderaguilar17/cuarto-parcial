class vehiculo{
  constructor(marca,modelo){
    this.marca=marca 
    this.modelo=modelo
    
  }arrancar(){ 
    console.log("el vehiculo esta arrancando ");

  }
  detener(){
    console.log("el vehiculo se detuvo ");
  }

}  

class coche extends vehiculo{
  constructor(marca,modelo,npuertas){
    super(marca,modelo)
    this.npuertas=npuertas
   }
    
}
class motocleta extends vehiculo{
  constructor(marca,modelo,cilindrado){
    super(marca,modelo)
    this.cilindradas=this.cilindradas
   }
    
}

const vehiculo1= new vehiculo("marca generica","modelo generico " )
const coche1= new coche("supra","toyota",2)
const moto= new motocleta("yamaha","r16",600)

console.log("___________vehiculo___________")
console.log("vehiculo generico")
vehiculo1.arrancar()
vehiculo1.detener()
console.log();

console.log("___________coche___________")
console.log("modelo:"+coche.modelo+ "marca:"+coche.marca +"numero de puertas:"+(coche.npuertas))
coche1.arrancar()
coche1.detener()
console.log();

console.log("___________motocicleta___________")
console.log("modelo: "+moto.marca+ " marca: "+moto.modelo+" cilindradas :"+moto.cilindraje)
moto.arrancar()
moto.detener()
console.log();






