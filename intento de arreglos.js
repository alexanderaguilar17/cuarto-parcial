var dulces=["palanca","chocorron","alkas"]
var auxdulce=prompt("ingrese un nuevo producto dulce ")

dulces.push(auxdulce)
console.log(dulces)
alert("elimine uno de los dulces ")

auxdulce=parseInt(prompt())

dulces.splice(auxdulce,1)

console.log(dulces)