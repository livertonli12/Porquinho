var config      = require('./config'),
    mongoose    = require('mongoose');

module.exports = function(){
  //Conectando ao mongodb
  var db = mongoose.connect(config.db);

  require('../app/models/user');
  //require('../app/models/article.server.model');

  //retornando a instância da conexão
  return db;
};
