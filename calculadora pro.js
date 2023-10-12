var historial=[]

function elegiroperacion(){

    let op=(prompt("ingrese el numero correspondiente para cada accion a=sumar b=restar c=multiplicar d=dividir e=salir f=mostrar histoial"))
    let n1=parseInt(prompt("ingrese un numero de operacion"))
    let n2=parseInt(prompt("ingrese el siguiente  numero de operacion "))
    let resultado 
switch(op){
    case "a":
     resultado=   n1+n2
     historial.push(resultado)
     alert(`el resultado es ${(resultado)}`)
    elegiroperacion()
break

case "b":
   resultado= n1-n2
   historial.push(resultado)
   alert(`el resultado es ${(resultado)}`)
   elegiroperacion()
break 

case "c":
  resultado=  n1*n2
  historial.push(resultado)
  alert(`el resultado es ${(resultado)}`)
  elegiroperacion()
break

case "d":
  resultado=  n1/n2
  historial.push(resultado)
  alert(`el resultado es ${(resultado)}`)
  elegiroperacion()
  break
  case "e":

  break

  case"f":
  function historial(){
    for(let i =0; i < resultado.length; i++){
        console.log(`el resultado fue  ${(resultado)}`)
    }
}historial();

default:
alert("opcion no valida")
elegiroperacion()
break

}
}
elegiroperacion()



















