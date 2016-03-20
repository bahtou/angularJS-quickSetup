'use strict';

angular
  .module('states.books.list')
  .controller('BookListCtrl', BookListCtrl);

BookListCtrl.$inject = ['bookFactory'];

function BookListCtrl(bookFactory) {
  var ctrl = this;

  bookFactory.getBooks(function(err, books) {
    if (err) {
      console.log('err getting books', err);
      return null;
    }

    ctrl.books = books;
  });

}

