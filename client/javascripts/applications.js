'use strict';

require('angular');

angular.element(document).ready(function() {
  require('./app');
  require('./routes');
  require('./controllers/index');
  require('./services/index');
  angular.bootstrap(document, ['myApp']);
});

