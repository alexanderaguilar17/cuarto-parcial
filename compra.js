
var carrito=[]

function agregarAlCarrito(articulo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Agregando ${articulo} alcarrito.`);
        resolve(articulo);
      }, 1000);
    });
  }
  