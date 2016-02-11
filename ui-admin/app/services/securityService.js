(function(){
  'use strict';

  var SecurityService = function($localStorage){

    var isLoggedOn = function(){
      return !!$localStorage.user;
    }

    return {
      isLoggedOn: isLoggedOn
    }
  };

  angular
    .module('app')
    .factory('SecurityService', ['$localStorage', SecurityService]);

})();
