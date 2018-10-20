const mongoose = require('mongoose');

const JuegosShema = new mongoose.Schema({
    nombre:String,
    tipo:String,
    genero:String,
    consola:String,
    añodeedicion:String
})
    
module.exports = mongoose.model('Juegos',JuegosShema);