class persona{
    constructor (nombre,edad){

    
    this.nombre=nombre
    this.edad =edad
}
saludar(){
    console.log("hola soy "+this.nombre+" y tengo "+this.edad+" años")

}
}
 
class estudiante extends persona{ 
    constructor(nombre,edad,grado){ 
        super(nombre,edad)
        this.grado=grado
         }
         estudiar(){
            console.log(this.nombre+" estudia el grado "+this.grado)
             }
              }
              var estudiante1=new estudiante("x",12,"tercero")
              estudiante1.saludar()
              estudiante1.estudiar()
              
 var persona1= new persona ("x",20)

 persona1.saludar()