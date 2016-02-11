var usuarios = require('../../app/controllers/usuarios.server.controller'),
    passport = require('passport');

module.exports = function(app){

  app.post('/api/auth/signup', usuarios.signup);

  app.post('/api/auth/signin', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/signin',
    failureFlash: true
  }))

  app.get('/api/auth/signout', usuarios.signout);

  app.get('/oauth/facebook', passport.authenticate('facebook', {
    failureRedirect: '/api/auth/signin',
    scope: 'email'
  }));

  app.get('/oauth/facebook/callback', passport.authenticate('facebook', {
    failureRedirect: '/api/auth/signin',
    successRedirect: '/'
  }));
}
