var numeros  = [100,20,44]

for (var i= 0; i< numeros.length; i++) {
  for (var j= i + 1; j< numeros.length; j++) {
    if (numeros[i]> numeros[j]) {
      var aux= numeros[i];
      numeros[i]= numeros[j];
      numeros[j]= aux;
    }
  }
}
for (var i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}