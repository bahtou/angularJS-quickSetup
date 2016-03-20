'use strict';

angular
  .module('states.books.upload')
  .config(routeConfig);

routeConfig.$inject = ['$stateProvider'];

function routeConfig($stateProvider) {
  $stateProvider
    .state('books.upload', {
      url: '/upload',
      templateUrl: 'states/books/upload/index.html',
      controller: 'BooksUploadCtrl',
      controllerAs: 'ctrl'
    });
}
