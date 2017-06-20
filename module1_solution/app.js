(function() {
  'use strict';
  angular.module('foodApp', [])
  .controller('foodController', foodController);

  foodController.$inject = ['$scope'];
  function foodController($scope){
    $scope.foodItems = '';
    $scope.checkbtn = function(){
      var foodArray = $scope.foodItems.split(',');
      if (foodArray == ''){
        alert('Please enter data first');
      }
      else {
        for (var i = 0; i < foodArray.length; i++) {
          if (foodArray[i] == '') {
            foodArray = foodArray.splice(i, 1);
          }
        }
        if (foodArray.length > 3) {
          alert('Too much!');
        }
        else if (foodArray.length <= 3) {
          alert('Enjoy!');
        }
      }
    };
  }

}());
