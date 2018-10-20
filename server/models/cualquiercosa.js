const mongoose = require('mongoose');

const cualquiercoShema = new mongoose.Schema({
    nombre:String,
    tipo:String,
    valor:Number,
    color:String
})
    
module.exports = mongoose.model('cualquier_cosa',cualquiercoShema);