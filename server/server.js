require('./config/config');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var gget=0
var ppost=0
var pput=0

app.get('/', function(req, res) {
    gget=gget+1
    console.log("llego una peticion GET !!!! Nro: "+gget)
    res.json('Peticion GET !!! Nro: '+gget);
}); 
app.post('/', function(req, res) {
    ppost=ppost+1
    console.log("llego una peticion POST !!!! Nro: "+ppost)
    res.json('Peticion POST !!! Nro: '+ppost);
}); 
app.put('/', function(req, res) {
    pput=pput+1
    console.log("llego una peticion PUT !!!! Nro: "+pput)
    res.json('Peticion PUT !!! Nro: '+pput);
}); 


app.get('/usuario', function(req, res) {
    console.log("llego una peticion GET a /usuario!!!!")
    res.json('get Usuario modif LOCAL!!!');
});

app.post('/usuario', function(req, res) {

    console.log("llego una peticion POST !!!!")

    let body = req.body;

    if (body.nombre === undefined) {

        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });

    } else {
        res.json({
            persona: body
        });
    }

});

app.put('/usuario/:id', function(req, res) {

    console.log("llego una peticion PUT !!!!")

    let id = req.params.id;

    res.json({
        id
    });
});

app.delete('/usuario', function(req, res) {
    console.log("llego una peticion DELETE !!!!")
    res.json('delete Usuario');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});