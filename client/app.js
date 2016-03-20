'use strict';

require('angular');
require('angular-ui-router');

angular
  .module('myApp', [
    'components.book.item',
    // 'components.book.search',
    // 'components.book.upload',
    'states.index',
    'states.books',
    'states.books.list',
    // 'states.books.serach',
    // 'states.books.upload',
    'services'
  ]);


angular.module('components.book.item', []);
// angular.module('components.book.search', []);
// angular.module('components.book.upload', []);

angular.module('states.index', []);
angular.module('states.books', []);
angular.module('states.books.list', []);
// angular.module('states.books.search', []);
// angular.module('states.books.upload', []);
angular.module('services', []);

angular.element(document).ready(function() {
  require('./states/app.js');
  require('./states/config.js');
  require('./states/indexController.js');

  require('./states/books/app.js');
  require('./states/books/config.js');

  require('./states/books/list/app.js');
  require('./states/books/list/config.js');
  require('./states/books/list/list-controller.js');

  require('./components/books/bookItem/app.js');
  require('./components/books/bookItem/book-item-directive.js');

  require('./services/bookService.js');

  angular.bootstrap(document, ['myApp']);
});

