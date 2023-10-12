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
    
    
    arregloEstudiantes.push(aggEstudiantes())
    
    console.log(arregloEstudiantes)
    
    