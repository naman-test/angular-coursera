(function() {
  'use strict';

  angular.module('ShoppingListApp', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var list = this;
    list.itemName = '';
    list.itemQuantity = '';

    list.toBuy = [{name: "Cookies", quantity: "10 boxes"},{name: "Chips", quantity: "10 boxes"},
                  {name: "More Chips", quantity: "10 boxes"},{name: "More Cookies", quantity: "10 boxes"},
                  {name: "Even more chips", quantity: "10 boxes"},{name: "Even more cookies", quantity: "10 boxes"}];

    list.itemBought = function (index) {
      ShoppingListCheckOffService.itemBought(list.toBuy[index].name, list.toBuy[index].quantity);
      list.toBuy.splice(index, 1);
      console.log(list.toBuy);
    }

  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var list = this;
    list.alreadyBought = ShoppingListCheckOffService.getItems();

  }

  function ShoppingListCheckOffService() {
    var service = this;
    var items = [];

    service.itemBought = function (itemName, itemQuantity) {
      var item = {
        name: itemName,
        quantity: itemQuantity
      }
      items.push(item);
    };

    service.removeItem = function (index) {
      items.splice(index, 1);
    };

    service.getItems = function () {
      return items;
    }
  }

}());
