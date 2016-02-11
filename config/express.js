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
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended:true }));
  //Method-override: Possibilita a utilização de verbos HTTP como:
  //PUT ou DELETE em locais que não poderiamos utilizar
  app.use(methodOverride());

  //Express-session: Middleware responsável por criar sessões
  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: config.sessionSecret
  }));

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
  // Configurações de Rotas
  //---------------------------------------------------------
  require('../app/routes/usuarios.server.routes.js')(app);
  require('../app/routes/lancamentos.server.routes.js')(app);
  require('../app/routes/conta.server.routes.js')(app);
  require('../app/routes/categoria.server.routes.js')(app);
  //---------------------------------------------------------
  // Configuração de Conteúdo Estático
  // É importante respeitar a ordem na qual foi inserido
  // para que não haja lentidão no carregamento.
  //---------------------------------------------------------
  app.use(express.static('./ui-website'));
  app.use('/admin', express.static('./ui-admin'));

  app.get('*', function(req, res) {
    res.redirect('/#' + req.originalUrl);
  });

  app.use(function(err, req, res, next){
    console.log("Error!");
    res.send(500, {message: err.message});
  });

  return app;
};
