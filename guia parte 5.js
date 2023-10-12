var calificaciones = [74, 99, 89, 84, 73, 100];
    function Promedio(calificaciones) {
    var total = 0;
    for (var i = 0; i < calificaciones.length; i++) {
      total += calificaciones[i];
    }
    var promedio = total / calificaciones.length;
    return promedio;
  }
  function IQmayoralpromedio(calificaciones) {
    var promedio = Promedio(calificaciones);
    console.log("Promedio:", promedio);
    console.log("Calificaciones  de niños que tienen un IQ  encima del promedio:");
    for (var i = 0; i < calificaciones.length; i++) {
      if (calificaciones[i] > promedio) {
        console.log(calificaciones[i]);
      }
    }
  }
  IQmayoralpromedio (calificaciones);


