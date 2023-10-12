var listapeliculas=[]
mostrarMenu()

function aggpelicula(){ 

let pelicula={
    titulodelapelicula:"",
    clasificacion:0,
    genero:"",
}
try{
    
pelicula.titulo=(prompt("ingrese el nombre de la pelicula"))
pelicula.clasificacion=parseInt(prompt("ingrese la clasificacion"))
pelicula.genero=(prompt("ingrese el genero "))

if(typeof pelicula.clasificacion!=="number"){
    throw"uno de los elementos no es valido"
}else if(isNaN(pelicula.clasificacion)){ 
throw"uno de los elementos no es valido"

}else{
    listapeliculas.push(pelicula) 
}  
}catch(error){
    console.error(error)
}

}
function mostrarMenu() { var seguirtrue

do { 

Letop=parseInt(prompt("Que accion desea realizar"+ "\nGuardar Pelicula: 1+\nMostrar peliculas: 2\nComprar boletos: 3 Salir: 4"))

switch (op) {

case 1:

AggPelicula()

break; case 2:

mostrarPeliculas(aggpelicula)

break

case 3:

comprarBoleto(aggpelicula)

case 4: seguirfalse

break

default:

break;


    }
}while (seguir==true);

 }
 function comprarBoleto(pelicula) {
let edad=parseInt(prompt("ingrese su edad"))
let indice=parseInt(prompt("ingrese el nombre de la pelicula "))
    if (typeof edad !== 'number' ||typeof indice !== 'number' ) {
      throw ('La edad debe ser un número.');
    }
    if (edad >= pelicula[indice-1].clasificacion) { 
    
    } else {
      throw ('La edad no es válida para comprar un boleto.');
    }
  }

 
