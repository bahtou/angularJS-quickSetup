'use strict';

angular
  .module('states.books')
  .config(routeConfig);

routeConfig.$inject = ['$stateProvider'];

function routeConfig($stateProvider) {
  $stateProvider
    .state('books', {
      abstract: true,
      url: '/books',
      template: '<ui-view/>'
    });
}
