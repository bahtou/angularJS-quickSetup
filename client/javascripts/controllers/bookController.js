'use strict';

angular.module('myApp.controllers')
  .controller('bookController', ['$scope', 'bookFactory', function($scope, bookFactory) {

    bookFactory.getBooks(function(err, books) {
      if (err) {
        console.log('err getting books', err);
        return null;
      }

      $scope.books = books;
    });

  }]);
