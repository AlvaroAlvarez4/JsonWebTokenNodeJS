var express = require('express');
var router = express.Router();
let connection = require('../config/db');
let jwt = require('jsonwebtoken');
let verify = require('../config/verify');

let secret = 'ljehbflibxawefxwf6e5gx26ear4g4xwe6g84e34cse';
let secret2 = '12356';

/*    localhost:3000/     */
router.get('/', verify, function(req, res) {

    console.log('ESTE ES EL ARCHIVO INDEX:JS');
    res.render('index', { title: 'Express' });
});








//localhost:3000/login
router.post('/login', (req, res) => {
    let name = req.body.name;
    console.log(name);

    /*
        let name = req.body.name;
        let password = sha1(req.body.password); 123
        console.log(name);

        let sql = `SELECT ( name ,last_name,address, phone, color_eyes ) FROM  user WHERE name = 
        '${name}', passsword = '${password}'`;

        connection.query(sql, (err, result) => {
          if (err) throw err;
            result : {

              name=''ruben,
              las_name,
              etc

            }


            //payload -> cuerpo -> los datos que yo voy a enviar desde backend creo token al front

          const token = jwt.sign({ result }, secret,{
            expiredIn = 60 * 60 * 24
          });

                res.json(token)
            })
    */
    //metodo sign permite crear un token
    //Como minimo recibe 2 parametros
    //aqui el campo { name } seria el objeto con los datos del usuario que quiero enviar codificados

    //let name = 'Ruben'
    const token = jwt.sign({ name }, secret);

    console.log(token)

    res.send(token)

});


router.get('/carrito', (req, res) => {
    ///recojo el token de la cabecera
    const token = req.header('token1');

    // console.log(token)

    //compruebo que exista el token
    if (!token) {
        res.send('noo exite el token');
    };

    //utilizo el metodo verify para verificar el token y con el secret si es correcto decodificarlo
    const decoded = jwt.verify(token, secret);
})






//  CREAR DOS RUTAS 1 QUE SEA POST 1 GET
//POST /CREARTOKENWEB TIENE QUE CREAR UN TOKEN CON LOS SIGUIENTES CAMPOS NAME, LAST_NAME, YEAR, DNI, COLOR_EYES
//GET TIENE QUE COMPROBAR SI ESE TOKEN ES CORRECTO O NO Y DECODIFICARLO

//         TENEIS 5 MINUTOS









// middleware es una funcion intermedia














module.exports = router;