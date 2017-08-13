(function() {
  'use strict';
  angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'categories.template.html',
    // controller: CategoriesController,
    bindings: {
      items: '<'
      }
  });
  console.log('component');
}());
