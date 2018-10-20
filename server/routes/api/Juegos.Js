const JuegosModel = require('../../models/Juegos.js')
module.exports= (app) => {
    app.post('/api/Juegos', (req,res) => {
    const {body} = req
    console.log("este es el body",body);
    const {nombre,tipo,genero,consola,añodeedicion} = body
    console.log("estos son las variables",nombre,tipo,genero,consola,añodeedicion)
    const JuegosObj = new  JuegosModel()
    JuegosObj.nombre = nombre
    JuegosObj.tipo = tipo
    JuegosObj.genero = genero
    JuegosObj.consola = consola
    JuegosObj.añodeedicion = añodeedicion
    JuegosObj.save((err, datos) =>{
    if (err) {
            console.log(err);
            return res.send({
                err
            })
        }else{
            return res.send({
                datos
            })
        }
    })
})
app.get('/api/showJuegos',(req,res,next)=>{
    //AQUI SE LLAMAN OH BUSCAN LOS DATOS
    JuegosModel.find((err,datos)=>{
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