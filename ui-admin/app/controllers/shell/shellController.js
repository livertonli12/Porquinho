(function(){
  'use strict';

  var ShellController = function($scope, $location, $route, SecurityService){
    var vm = this;

    vm.isLoggedOn = function(){
      return SecurityService.isLoggedOn();
    };

  };

  angular
    .module('app')
    .controller('ShellController', ['$scope', '$location', '$route', 'SecurityService', ShellController]);

})();
