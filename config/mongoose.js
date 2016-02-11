var config      = require('./config'),
    mongoose    = require('mongoose');

module.exports = function(){
  //Conectando ao mongodb
  var db = mongoose.connect(config.db);

  require('../app/models/usuario.server.model');
  require('../app/models/lancamentos.server.model');
  require('../app/models/conta.server.model');
  require('../app/models/categoria.server.model');

  //retornando a instância da conexão
  return db;
};
