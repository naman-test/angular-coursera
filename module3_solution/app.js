(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItems);

  function FoundItems() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        found: '<',
        onRemove: '&'
      },
      controller: NarrowItDownController,
      controllerAs: 'list',
      bindToController: true
    };

    return ddo;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var list = this;
    list.narrow = function () {
      var promise = MenuSearchService.getMatchedMenuItems(list.searchTerm);
      promise.then(function (response) {
        list.found = response;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
    list.onRemove = function (index) {
      list.found.splice(index, 1);
    }
  }


  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      var response = $http({
        method: "GET",
        url:  "https://davids-restaurant.herokuapp.com/menu_items.json"
      }).then(function (response) {
        console.log(response.data);
        var items = response.data.menu_items;
        var founded = new Array();
        for (var i = 0; i < items.length; i++){
          if (items[i].description.includes(searchTerm) && searchTerm !== '') {
            founded.push(items[i]);
          }
        }
        return founded;
      });

      return response;
    }

  }



}());
