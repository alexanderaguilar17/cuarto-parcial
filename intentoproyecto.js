var aggEstudiantes
function aggEstudiantes(){ 

let Estudiantes={
   nombre:"",
    edad:0,
    calificacion:0,

}

Estudiantes.nombre=(prompt("ingrese el nombre del estudiante"))
Estudiantes.edad=parseInt(prompt("ingrese la edad del estudiante"))
Estudiantes.calificacion=parseInt(prompt("la calificacion promedio del estudiante"))

return Estudiantes
}

var aggEstudiantes=[]

aggEstudiantesEstudiantes.push(aggEstudiantes())
console.log(aggEstudiantes)

calcularPromedio(aggEstudiantesEstudiantes)

function calcularPromedio(aggEstudiantes){ 
    let promedio
for (let i = 0; i < aggEstudiantesEstudiantes.length; i++) {
    promedio=promedio+aggEstudiantes[i].calificacion
}
promedio=promedio/arreglo.length
console.log(promedio);
}

calcularPromedio(aggEstudiantes)

function aggEstudiantes(){
 console.log("Lista de Alumnos:");
 for (let i = 0; i < alumnos.length; i++) {
   console.log(`Nombre: ${alumnos[i].nombre}, Edad: ${alumnos[i].edad}, Nota: ${alumnos[i].nota}`);  
 }}

  function MostrarMenu (){
let continuar = true;
while (continuar) {
      
op=prompt("Menú:\na.agregar un estuidante\nb. Mostrar listado de estudiantes.\nc.promedio de todos los alumos.\n d.terminar el programa ");
if (op=="a"){
 agregarAlumno();
 }
else if (op=="b"){
  alert("abra la consola")
 ListadoDeAlunos();
}   
 else if (op=="c"){
calcularPromedio();
 }
 else if (op=="d"){
 alert("good bay")
 continuar = false; }
}}
 MostrarMenu ();
  