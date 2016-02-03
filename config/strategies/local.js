var passport              = require('passport'),
    LocalStrategy         = require('passport-local').Strategy,
    User                  = require('mongoose').model('User');

//o terceiro método do passport encontramos logo abaixo:
//ele é responsável por dizer ao passport a estratégia que poderá ser utilizada
module.exports = function(){
  passport.use(new LocalStrategy(function(username, password, done){
    User.findOne({ username: username }, function(err, user){
      if(err)
        return done(err);

      if(!user)
        return done(null, false, { message: 'Unknown user' });

      if(!user.authenticate(password))
        return done(null, false, { message: 'Invalid password' });

      return done(null, user);
    })
  }))
};
