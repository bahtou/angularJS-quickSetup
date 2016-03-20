'use strict';

angular
  .module('states.index')
  .config(routeConfig);

routeConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('index', {
      url: '/',
      templateUrl: '../layouts/index.html',
      controller: 'IndexController',
      controllerAs: 'ctrl'
    });


  //fall through
  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true,
    rewriteLinks: false
  });
}

/*
  routeConfig

  is a function that is being used throughout multiple modules.
  lets see if this same naming scheme interferes with each other
 */
