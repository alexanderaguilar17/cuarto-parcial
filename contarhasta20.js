function contarA20(valor){

    if(valor<=20){
        console.log(valor)
        valor++
        contarA20(valor)
     }else{
        console.log("listo xd") 
    }
}

contarA20(5)