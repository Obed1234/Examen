const LigaNacional = require('../../models/Usuarioliga.js')
const mongoose = require('mongoose');
module.exports = (app) =>{
    app.post('/api/Usuarioliga',(req,res,next) => {
        console.log("la request es",req);
        //INGRESAR DATOS
        const{body} = req
        console.log("el body es",body)
        const{
            nombre,
            edad,
            mail,
            cell,
            id,
            nacionalidad,
            EquipoFavorito
        } = body
        const Usuarioliga = new LigaNacional();
        Usuarioliga.nombre = nombre;
        Usuarioliga.edad = edad;
        Usuarioliga.mail=mail;
        Usuarioliga.cell=cell;
        Usuarioliga.id=id;
        Usuarioliga.nacionalidad=nacionalidad;
        Usuarioliga.EquipoFavorito=EquipoFavorito;
        console.log("datos que voy a guardar", UsuarioLiga);
        Usuarioliga.save((err,datos) =>{
        if (err) {
            return res.send({
                err
            })
        }
         else {
            return res.send({
                datos,
                mensaje:"ehh salio bien"
        })
     }     
        
    } )    
})
app.get('/api/showusuarios',(req,res,next)=>{
    //AQUI SE LLAMAN OH BUSCAN LOS DATOS
    LigaNacional.find((err,datos)=>{
        if (err) {
            return res.send({
                err
            })
        } else {
         return res.send({
             datos
         })   
        }
    })
})
}
