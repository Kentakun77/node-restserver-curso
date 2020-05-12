// Puerto
process.env.PORT = process.env.PORT || 3000;

//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Vencimiento de token
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;
//Seed de autenticacion
process.env.SEED = 'este-es-el-seed-desarrollo';

//Base de Datos
let urlDB;

if (process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe';
}else{
    urlDB ='mongodb+srv://Kentakun77:Veronica007@cluster0-7qteq.mongodb.net/test';
}
process.env.URLDB = urlDB;

//Google Client ID
process.env.CLIENT_ID = process.env.CLIENT_ID || '1063628434729-bvmc727vb8hsg998s7i3hnbg3cl2bcs4.apps.googleusercontent.com';