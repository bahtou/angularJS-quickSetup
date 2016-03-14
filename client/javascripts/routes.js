'use strict';

angular.module('myApp')
  .config(($stateProvider, $urlRouterProvider, $locationProvider) => {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/home',
        views: {
          application: {
            templateUrl: 'views/home.html',
            controller: 'homeController',
            controllerAs: 'homeCtrl'
          }
        }
      })
      .state('books', {
        url: '/books',
        views: {
          books: {
            templateUrl: 'views/book.html',
            controller: 'bookController',
            controllerAs: 'bookCtrl'
          }
        }
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: true
    });
  });
