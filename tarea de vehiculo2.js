class Vehiculo {
    constructor(marca,modelo){
        this.marca=marca
        this.modelo = modelo
    }
    
    arrancar(){
        console.log("El vehiculo esta arrancando");
    }

    detener(){
        console.log("El vehiculo se detuvo.");
    }

}

class Coche extends Vehiculo{
    constructor(marca,modelo,numPuertas){
        super(marca,modelo)
        this.numPuertas=numPuertas
    }

    arrancar(){//Sobreescribiendo un metodo
        console.log("El Coche esta arrancando");
    }

}

class Motocicleta extends Vehiculo{
    constructor(marca,modelo,cilandrada){
        super(marca,modelo)
        this.cilandrada=cilandrada
    }
}


const vehiculo = new Vehiculo("MarcaGenerica","ModeloGenerico")
const coche = new Coche("Supra","Toyota",2)
const moto = new Motocicleta("Yamaha","R6",600)

console.log("---------Vehiculo-------");
console.log(`Vehiculo Generico`);
vehiculo.arrancar()
vehiculo.detener()
console.log();

console.log("----------Coche----------");
console.log(`Modelo: ${coche.modelo} Marca: ${coche.marca} Numero de puertas: ${coche.numPuertas}`);
coche.arrancar()
coche.detener()
console.log();

console.log("----Motocicleta----------");
console.log("Marca: "+moto.marca+" Modelo: "+moto.modelo+" Cilandradas: "+moto.cilandrada);
moto.arrancar()
moto.detener()
console.log();