function validar(){

    let op=prompt("S/N")
    alert("selecione una de las opciones N/S")
    if(op=="S"){
    return true
    }else if(op=="N"){
        return false
        }else{
            alert("opcion no valida ")
            validar()
    }
}
console.log((validar))