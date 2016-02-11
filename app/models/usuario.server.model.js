var mongoose   = require('mongoose'),
    crypto     = require('crypto'),
    Schema     = mongoose.Schema;

//Primeiro declaramos o Schema
var UsuarioSchema = new Schema({
    firstName: String,
    lastName: String,
    email:{
        type: String,
        match: [/.+\@.+\..+/, "Por favor, informe um endereço de e-mail válido"]
    },
    username: {
        type: String,
        unique: true, //Unique fará com que não seja possível inserir 2 usernames com o mesmo nome
        required: 'Usuário já existe',
        trim: true
    },
    password:{
        type: String,
        validate: [
            function(password){
                return password && password.length > 6;
            }, 'A Senha precisa ser maior que 6 caracteres'
        ]
    },
    salt: String,
    provider: {
        type: String,
        required: 'Provider é obrigatório'
    },
    providerId: String,
    providerData: {},
    created:{
        type: Date,
        default: Date.now
    }
});

//o virtual é uma propriedade que não está necessariamente no
//banco ou então uma propriedade que você quer tratar antes de
//adicionar no banco.
UsuarioSchema.virtual('fullName').get(function(){
    return this.firstName + ' ' + this.lastName;
}).set(function(fullName){
    if(fullName){
        var splitName = fullName.split(' ');
        this.firstName = splitName[0] || '';
        this.lastName = splitName[1] || '';
    }
});

//funções que são executadas antes de salvar um documento
UsuarioSchema.pre('save', function(next){
  if(this.password){
    this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
    this.password = this.hashPassword(this.password);
  }
  next();
});

//instance methods são métodos adicionais aos que já existem
UsuarioSchema.methods.hashPassword = function(password){
  return crypto.pbkdf2Sync(password, this.salt, 10000, 62).toString('base64');
};
//instance methods são métodos adicionais aos que já existem
UsuarioSchema.methods.authenticate = function(password){
  return this.password == this.hashPassword(password);
};

//statics permite adicionar operações extras à model
//como por exemplo uma busca
UsuarioSchema.statics.findOneByUsername = function(username, callback){
  this.findOne({username: new RegExp(username, 'i')}, callback);
};

UsuarioSchema.statics.findUniqueUsername = function(username, suffix, callback) {
  var _this = this;
  var possibleUsername = username + (suffix || '');

  _this.findOne({
    username: possibleUsername
  }, function(err, user) {
    if (!err) {
      if (!user) {
        callback(possibleUsername);
      } else {
        return _this.findUniqueUsername(username, (suffix || 0) + 1, callback);
      }
    } else {
      callback(null);
    }
  });
};


//Registramos que estamos utilizando getters e virtuals
UsuarioSchema.set('toJSON', {getters: true, virtuals: true});
//Criamos a model
mongoose.model('Usuario', UsuarioSchema);
