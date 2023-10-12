function dividirnumeros(n1,n2){
    try{
        if(typeof n1!=="number"||typeof n2!=="number"){
            throw "uno de los argumentos no es un numero"
        }else if (n2==0){
            throw" no se puede dividir entre 0"
    }else{
        return n1/n2
    }
     }catch(error){
        return"error"+error
     }
      }
      console.log(dividirnumeros(25,5))
      console.log(dividirnumeros(10,0))
      console.log(dividirnumeros("abc",2))


