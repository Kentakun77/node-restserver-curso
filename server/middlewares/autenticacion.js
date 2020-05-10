const jwt = require('jsonwebtoken');

//Verificar token
let verificaToken = (req, res, next) => {
    let token = req.get('token');
    jwt.verify(token, process.env.SEED, (err, decoded)=>{
        if (err){
            return res.status(401).json({
                ok: false,
                err:{
                    message: 'Token no válido'
                }
            });
        }
        req.usuario = decoded.usuario;
        next();
    });

};
//Verificar Administrador
let verificaAdmin_Role = (req, res, next)=>{
    let usuario = req.usuario;
    if(usuario.role==='ADMIN_ROLE'){
        next();
    }else{
        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es un administrador'
            }
        });
    }

};

module.exports={
    verificaToken,
    verificaAdmin_Role
};