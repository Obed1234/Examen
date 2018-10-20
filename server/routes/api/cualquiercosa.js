const CualquierModel = require('../../models/cualquiercosa.js')
module.exports= (app) => {
    app.post('/api/cualquier', (req,res) => {
    const {body} = req
    console.log("este es el body",body);
    const {nombre,tipo,valor,color} = body
    console.log("estos son las variables",nombre,tipo,valor,color)
    const cualquiercoObj = new CualquierModel()
    cualquiercoObj.nombre = nombre
    cualquiercoObj.tipo = tipo
    cualquiercoObj.valor = valor
    cualquiercoObj.color = color

    cualquiercoObj.save((err, datos) =>{
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
}