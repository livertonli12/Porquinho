(function(){
  'use strict';

  var authService = function($http){

    var authFacebook = function(){
      return $http.get('/oauth/facebook');
    };

    var authLocal = function(username, password){

    }

    return {
      authLocal: authLocal,
      authFacebook: authFacebook
    };

  };


  angular
    .module('app')
    .factory('AuthService',['$http', authService]);

})();
