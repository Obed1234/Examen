const PersonaEs = require('../../models/Persona.js')
const mongoose = require('mongoose');
module.exports = (app) =>{
    app.post('/api/personadatos',(req,res,next) => {
        //INGRESAR DATOS
        const{body} = req
        const{
            nombre,
            edad,
            mail,
            cell,
        } = body
        const PersonaDatos = new PersonaEs();
        PersonaDatos.nombre = nombre
        PersonaDatos.edad = edad
        PersonaDatos.mail=mail
        PersonaDatos.cell=cell
        PersonaDatos.save((err,datos) =>{
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
app.get('/api/showdatos',(req,res,next)=>{
    //AQUI SE LLAMAN OH BUSCAN LOS DATOS
    PersonaEs.find((err,datos)=>{
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
