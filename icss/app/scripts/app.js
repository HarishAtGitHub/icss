'use strict';

angular.module('icssApp', [
  'ngRoute',
  '$strap.directives',
        'ui.codemirror'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .otherwise({
        templateUrl: '404.html'
      });
  });
