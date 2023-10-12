let alumnos = [];
function agregarAlumno() {
  let alumno = {
nombre: nombre = prompt("Ingrese el nombre del alumno"),
edad: edad = prompt("ingrese  la edad del alumno "),
 nota: nota = prompt("ingrese la nota promedio del alumno ")
 };
  alumnos.push(alumno);
}
function ListadoDeAlunos(){
console.log("Lista de Alumnos:");
for (let i = 0; i < alumnos.length; i++) {
  console.log(`Nombre: ${alumnos[i].nombre}, Edad: ${alumnos[i].edad}, Nota: ${alumnos[i].nota}`);  
}}
function calcularPromedio() {
nota = 0;
  for (let i = 0; i < alumnos.length; i++) {
 notas  += alumnos[i].nota;
  }
  return nota / alumnos.length;
}
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
  continuar = false;
  }
}}
  MostrarMenu ();