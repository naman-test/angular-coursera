(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'home.html'
  })
  .state('categories', {
    url: '/categories',
    template: '<a ui-sref="home">Home</a> <categories categories="categoryCtrl.categories"></categories>',
    controller: 'CategoriesController as categoryCtrl',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })
  .state('items', {
    url: '/items/{categoryName}',
    template: '<a ui-sref="home">Home</a> <a ui-sref="categories">Categories</a><items items="itemCtrl.items"><items>',
    controller: 'ItemsController as itemCtrl',
    resolve: {
      items: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
        var categoryName = $stateParams.categoryName;
        return MenuDataService.getItemsForCategory(categoryName);
      }]
    }
  });
}

})();
