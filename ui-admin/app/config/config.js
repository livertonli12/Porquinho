(function(){
  'use strict';

  angular
    .module('app')
    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider){
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
      $locationProvider.hashPrefix('!');

      $routeProvider
        .otherwise({
          redirectTo: '/admin'
        });
    }]);
})();
