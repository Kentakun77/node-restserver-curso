// Puerto
process.env.PORT = process.env.PORT || 3000;

//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//Base de Datos
let urlDB;

if (process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe';
}else{
    urlDB ='mongodb+srv://Kentakun77:Veronica007@cluster0-7qteq.mongodb.net/test';
}
process.env.URLDB = urlDB;