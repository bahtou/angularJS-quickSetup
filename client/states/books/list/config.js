'use strict';

angular
  .module('states.books.list')
  .config(routeConfig);

routeConfig.$inject = ['$stateProvider'];

function routeConfig($stateProvider) {
  $stateProvider
    .state('books.list', {
      url: '/list',
      templateUrl: 'states/books/list/main.html',
      controller: 'BookListCtrl',
      controllerAs: 'ctrl'
    });
}
