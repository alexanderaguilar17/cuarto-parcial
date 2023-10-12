function encontrarPalabraMasLarga(palabras){
    var palabraMasLarga = "";

    for (var i = 0; i < palabras.length; i++) {
        var palabraActual = palabras[i];

        if (palabraActual.length > palabraMasLarga.length) {
            palabraMasLarga = palabraActual;
        }
    }

      return palabraMasLarga;
}
  
  var arregloPalabras = ["esta", "jamon", "las cosa de la vida "];
  var palabraMasLarga = encontrarPalabraMasLarga(arregloPalabras);
  
  console.log("La palabra más larga es: " + palabraMasLarga);

