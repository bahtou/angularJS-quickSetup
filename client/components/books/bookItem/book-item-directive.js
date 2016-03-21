'use strict';

var componentName = 'bookItem';
var template = 'components/books/bookItem/book-item.html';

angular
  .module('components.book.item')
  .directive(componentName, component);

function component() {
  return {
    scope: {},
    templateUrl: template,
    controller: BookItemController,
    controllerAs: '$ctrl',
    bindToController: {
      book: '<'
    }
  };
}

BookItemController.$inject = [];

function BookItemController() {}
