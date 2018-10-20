const mongoose = require('mongoose');

const PersonaShema = new mongoose.Schema ({
  nombre:String,
  edad:Number, 
  mail:String,
  cell:Number 
})

module.exports = mongoose.model('user',PersonaShema);
