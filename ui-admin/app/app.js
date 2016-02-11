(function(){
  'use strict';

  var app = angular.module('app', [
    'ngAnimate',
    'ngRoute',
    'ngCookies',
    'ngResource',
    'ngStorage',
    'ngSanitize',
    'ngTouch',
    'toastr'
  ]);

  app.run(function(){
    console.log("Angular get started!");
  });

})();
