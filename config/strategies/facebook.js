var passport = require('passport'),
    url = require('url'),
    FacebookStrategy = require('passport-facebook').Strategy,
    config = require('../config'),
    usuarios = require('../../app/controllers/usuarios.server.controller');

//o terceiro método do passport encontramos logo abaixo:
//ele é responsável por dizer ao passport a estratégia que poderá ser utilizada
//no caso do facebook além de específicar a estratégia, devemos chamar uma segunda
//função responsável por verificar o usuário.
module.exports = function() {
  passport.use(new FacebookStrategy({
    clientID: config.facebook.clientID,
    clientSecret: config.facebook.clientSecret,
    callbackURL: config.facebook.callbackURL,
    profileFields: ['id', 'birthday', 'email', 'first_name', 'gender', 'last_name', 'displayName'],
    passReqToCallback: true
  },
  function(req, accessToken, refreshToken, profile, done) {
    var providerData = profile._json;
    providerData.accessToken = accessToken;
    providerData.refreshToken = refreshToken;

    var providerUserProfile = {
      firstName: profile.name.givenName,
      lastName: profile.name.familyName,
      fullName: profile.displayName,
      email: profile.emails[0].value,
      username: profile.username,
      provider: 'facebook',
      providerId: profile.id,
      providerData: providerData
    };

    usuarios.saveOAuthUserProfile(req, providerUserProfile, done);
  }));
};
