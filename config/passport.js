var passport = require('passport'),
    mongoose = require('mongoose');

module.exports = function() {
  //carregando a Model User. O que isso vai fazer ?
  //Possibilitará a execução de queries na collection User
  var Usuario = mongoose.model('Usuario');

  //O passport precisa de três métodos, dois deles encontraremos abaixo:
  //Serialize user para serializar o usuário
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  //DeserializeUser para recuperar as informações do usuário.
  //os dashes em password e salt significam que não queremos que estas
  //propriedades sejam retornadas
  passport.deserializeUser(function(id, done) {
    Usuario.findOne({
      _id: id
    }, '-password -salt', function(err, user) {
      done(err, user);
    });
  });

  //Carregamento das minhas estratégias de conexão.
  //Podemos ter conexões locais ou via social.
  require('./strategies/local.js')();
  require('./strategies/facebook.js')();
};
