let jwt = require('jsonwebtoken');
let secret = 'secret';



function verify(req, res, next) {
    ///recojo el token de la cabecera
    const token = req.header('token1');

    // console.log(token)

    //compruebo que exista el token
    if (!token) {
        res.send('noo exite el token');
    };

    //utilizo el metodo verify para verificar el token y con el secret si es correcto decodificarlo
    const decoded = jwt.verify(token, secret);

    console.log('PASA POR EL ARCHIVO VERIFY.JS');

    next();
}


/*
LOGIN:EJS un formulario con 2 inputs
creamos en la tabla passsword lastname,email 

crear una ruta get que haga una consulta a base de datos del email UNICO y la password de un usuario
estos datos llegan de un formulario de la vista login.ejs
y que si existen estos datos me cree un token con el nombre,lastname,email del usuario
despues decodificar con postman el token para ver que es correcto


*/
module.exports = verify;