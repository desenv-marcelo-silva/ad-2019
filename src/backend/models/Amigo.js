const mongoose = require('mongoose');

const AmigoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  nomeAmigo: {
    type: String
  }
});

const Amigo = mongoose.model("Amigo", AmigoSchema);
module.exports = Amigo;