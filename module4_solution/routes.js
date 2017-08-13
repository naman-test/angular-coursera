(function() {
  'use strict';
  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function RoutesConfig($stateProvider, $urlRouterProvider) {
    var routes = this;

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('categories',{
          url: '/categories',
          templateUrl: 'maincategory.template.html',
          controller: 'CategoriesController as categoryCtrl',
          resolve: {
            categories: ['MenuDataService', function (MenuDataService) {
              return MenuDataService.getAllCategories();
            }]
          }
      })
      .state('items',{
        url: '/items/{categoryId}',
        templateUrl: 'items.template.html'
      })

  }
}());
