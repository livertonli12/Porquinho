var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var CategoriaSchema = new Schema({
  nome: String,
  cor: String
});

mongoose.model('Categoria',CategoriaSchema);
