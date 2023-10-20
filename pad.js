var usuario = {}

var usuarioregistrado = false

var intentos = 0

function registraUsuario(user, pass) {

    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            usuario.nombre = user
            usuario.clave = pass
            if (usuario.nombre && usuario.clave) {

                resolver(true)
            } else {
                reject(new error("error al registrar usuario "))
            }
        },1000)
    })

    }






