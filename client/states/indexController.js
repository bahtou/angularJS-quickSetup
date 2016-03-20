'use strict';

angular
  .module('states.index')
  .controller('IndexController', IndexController);

IndexController.$inject = [];

function IndexController() {
  var ctrl = this;

  ctrl.title = 'My Fucking App';
  ctrl.welcome = 'Welcome to my brain fuck!';
}

