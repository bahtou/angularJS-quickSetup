'use strict';

angular
  .module('states.books.search')
  .config(routeConfig);

routeConfig.$inject = ['$stateProvider'];

function routeConfig($stateProvider) {
  $stateProvider
    .state('books.search', {
      url: '/search',
      templateUrl: 'states/books/search/index.html',
      controller: 'BooksSearchCtrl',
      controllerAs: 'ctrl'
    });
}
