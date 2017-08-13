(function() {
  'use strict';
  angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['categories'];

  function CategoriesController(categories) {
    var categoryCtrl = this;

    categoryCtrl.categories = categories;
    console.log(categoryCtrl.categories);


  }
}());
