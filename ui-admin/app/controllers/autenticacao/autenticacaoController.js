(function(){
  'use strict';

  var autenticacaoController = function($scope, AuthService){
    var vm = this;

    vm.login = function(){
      console.log("Opa! Você tentou logar normalmente em ?");
    };

    vm.loginFacebook = function(){
      AuthService.authFacebook();
    };
  };

  angular
    .module('app')
    .controller('AutenticacaoController', ['$scope', 'AuthService', autenticacaoController]);

})();
