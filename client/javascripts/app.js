'use strict';

require('angular-ui-router');

let myApp = angular.module('myApp', [
  'ui.router',
  'myApp.controllers',
  'myApp.directives',
  'myApp.filters',
  'myApp.services'
]);

angular.module('myApp.controllers', []);
angular.module('myApp.directives', []);
angular.module('myApp.filters', []);
angular.module('myApp.services', []);
