require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hola Mundo');
});
app.post('/', function (req, res) {
    let body = req.body;
    if (body.nombre === undefined){
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    }else{
        res.json({body});
    }

});
app.put('/', function (req, res) {
    res.json('put Usuario');
});
app.delete('/', function (req, res) {
    res.json('delete Usuario');
});

app.listen(process.env.PORT, () =>{
    console.log('Escuchando puerto: ', process.env.PORT);
});