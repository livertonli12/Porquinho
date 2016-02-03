var config         = require('./config'),
    express        = require('express'),
    morgan         = require('morgan'),
    compress       = require('compression'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    session        = require('express-session'),
    flash          = require('connect-flash'),
    passport       = require('passport');

module.exports = function(){

  //---------------------------------------------------------
  // Inicialização do Express
  //---------------------------------------------------------
  var app = express();
  //---------------------------------------------------------
  // Decisões de Log de Ambiente | Dev x Prox
  //---------------------------------------------------------
  if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
  } else if (process.env.NODE_ENV === 'production'){
    app.use(compress());
  }
  //---------------------------------------------------------
  // Middlewares de Configuração do Express
  //---------------------------------------------------------
  //Body-Parser: utilizado para fazer o parse do json enviado no corpo das
  //requisições. Não trabalha com multipart
  app.use(bodyParser.urlencoded({ extended:true }));
  app.use(bodyParser.json());

  //Method-override: Possibilita a utilização de verbos HTTP como:
  //PUT ou DELETE em locais que não poderiamos utilizar
  app.use(methodOverride());

  //Express-session: Middleware responsável por criar sessões
  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: config.sessionSecret
  }));

  //Definição de onde serão colocadas as views do projeto
  app.set('views','./app/views');
  //Definição da view engine que será utilizada.
  app.set('view engine','ejs');

  //Connect-flash: Flash é uma area especial da session para armazenamento de
  //mensagens. É comumente utilizado quando desejamos que uma mensangem apareça
  //na página seguinte após um redirect
  app.use(flash());
  //---------------------------------------------------------
  // Configurações de Autenticação
  //---------------------------------------------------------
  app.use(passport.initialize());
  app.use(passport.session());
  //---------------------------------------------------------
  // Configuração de Conteúdo Estático
  // É importante respeitar a ordem na qual foi inserido
  // para que não haja lentidão no carregamento.
  //---------------------------------------------------------
  app.use(express.static('./public'));

  return app;
};
