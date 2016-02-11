var User     = require('mongoose').model('Usuario'),
    passport = require('passport');

//método privado para lidar com mensagens de erro
var getErrorMessage = function(err){
    var message = '';

    if(err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message: 'Usuário já existe';
                break;
            default:
                message: 'Alguma coisa aconteceu de errado';
                break;
        }
    } else {
        for (var errName in err.errors){
            if(err.errors[errName].message)
                message = err.errors[errName].message;
        }
    }

    return message;
}

exports.saveOAuthUserProfile = function(req, profile, done){
    User.findOne({
        provider: profile.provider,
        providerId: profile.providerId
    }, function(err, user){
        if(err) return done(err);
        else{
            if(!user){
                var possibleUsername = profile.username || ((profile.email) ? profile.email.split('@')[0] :  '');
                User.findUniqueUsername(possibleUsername, null, function(availableUsername){
                    profile.username = availableUsername;

                    user = new User(profile);
                    user.save(function(err){
                        if(err){
                            var message = _this.getErrorMessage(err);
                            req.flash('error', message);
                            return res.redirect('/signup');
                        }
                        return done(err, user);
                    });
                });
            } else {
                return done(err, user);
            }
        }
    });
};

exports.signup = function(req, res, next){
    if(!req.user){
        var user = new User(req.body);
        var message = null;

        user.provider = 'local';

        user.save(function(err){
            if(err){
                var message = getErrorMessage(err);
                req.flash('error', message);
                return res.redirect('/signup');
            }
            req.login(user, function(err){
                if(err) return next(err);
                return res.redirect('/');
            });
        });
    } else {
        return res.redirect('/');
    }
};

exports.signout = function(req, res){
    req.logout();
    res.redirect('/');
};
