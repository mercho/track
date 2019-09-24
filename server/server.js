require('./config/config');

const express = require('express');
//const app = express();
const http = require('http')
const app = http.createServer((req, res)=> {
    res.statusCode =200
})
/*
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
//myEmitter.emit('event');
myEmitter.emit('event', () => {
    console.log('un evento se ha emitido');
  });
*/
app.on('request', (req, res) => {
    console.log("esta es la request: "+"url: "+req.url+"  metodo: "+req.method)
    console.log("esta es la res"+res)
});
app.on('upgrade', (req, res) => {
    console.log("esta es la req up"+req.url)
    console.log("esta es la res"+res)
});
app.on('checkContinue', (req, res) => {
    console.log("esta es la req che"+req.url)
    console.log("esta es la res"+res)
});
app.on('clientError', (req, res) => {
    console.log("esta es la req cli"+req.url)
    console.log("esta es la res"+res)
});
/*
var gget=0
var ppost=0
var pput=0
var ccon=0

app.on('request', function(req, res) {
    ccon=ccon+1
    console.log("llego una conexion nueva!!!! Nro: "+ccon)
    res.json('Conexion !!! Nro: '+ccon);
});

app.get('/*', function(req, res) {
    gget=gget+1
    console.log("llego una peticion GET !!!! Nro: "+gget+" es esta "+ res)
    res.json('Peticion GET !!! Nro: '+gget);
}); 
app.post('/*', function(req, res) {
    ppost=ppost+1
    console.log("llego una peticion POST !!!! Nro: "+ppost)
    res.json('Peticion POST !!! Nro: '+ppost);
}); 
app.put('/*', function(req, res) {
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
*/
app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});