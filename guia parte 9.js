var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numerosPares = [];
for (var i= 0;i< numeros.length; i++) {
  if (numeros[i] %2==0) {
    numerosPares.push(numeros[i]);
  }
}
console.log(numerosPares);
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numerosImpares = [];
for (var i= 0;i< numeros.length; i++) {
  if (numeros[i]%1==0) {
    numerosImpares.push(numeros[i]);
  }
}
console.log(numerosImpares);
