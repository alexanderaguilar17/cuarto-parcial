var nombres = ["paco","moises","el señor de la noche"];
var elbuscado = "el señor de la noche";
for (var i = 0; i < nombres.length; i++) {
  if (nombres[i] === elbuscado) {
console.log("El nombre"+elbuscado);
console.log("se encuentra en la posición"+i)
    break;
  }}