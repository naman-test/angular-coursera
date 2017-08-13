(function() {
  'use strict';
  angular.module('data')
  .service('MenuDataService', MenuDataService);
  // .constant('https://davids-restaurant.herokuapp.com/', 'ApiBasePath');


  MenuDataService.$inject = ['$http'];
  function MenuDataService($http) {
    var service = this;

    service.getAllCategories = function () {
      var promise = $http({
        method: "GET",
        url: 'https://davids-restaurant.herokuapp.com/categories.json'
      }).then(function (response) {
          console.log(response.data);
          return response.data;
      });

      return promise;
    };

    service.getItemsForCategory = function (categoryShortName) {
      var promise = $http({
        method: "GET",
        params: {
          cateory: categoryShortName
        },
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
      }).then(function (response) {
        return response.data.menu_items;
      });

      return promise;
    }
  }
}());
