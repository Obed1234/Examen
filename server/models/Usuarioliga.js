const mongoose = require('mongoose');

const UsuarioLigaSchema = new mongoose.Schema ({
  nombre:String,
  edad:Number, 
  mail:String,
  cell:Number,
  id:Number,
  nacionalidad:String,
  EquipoFavorito:String

})

module.exports = mongoose.model('usuario',UsuarioLigaSchema);