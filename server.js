//setando a variável NODE_ENV
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//Carregamento dos módulos
var mongoose   = require('./config/mongoose'),
    express    = require('./config/express'),
    passport   = require('./config/passport');

//Inicialização do mongodb
var db       = mongoose();
//Inicialização do express
var app  = express();
//Inicialização da autenticação
var passport = passport();

//Inicialização do aplicativo
app.listen(3000);

module.exports = app;

console.log('Server running at http://localhost:3000/');
