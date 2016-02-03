//definição de todas as variáveis de desenvolvimento
module.exports = {
  db: 'mongodb://localhost/porquinho',
  sessionSecret: 'developmentSessionSecret',
  facebook: {
    clientID: '1560154264306149',
    clientSecret: '86fced159c8090b4a8151edb3d239ce2',
    callbackURL: 'http://localhost:3000/oauth/facebook/callback',
    profileFields: ['emails', 'displayName']
  }
};
