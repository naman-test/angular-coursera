(function(){
  'use strict'
  angular.module("public")
  .controller("InfoController", InfoController);

  InfoController.$inject = ['SignUpService', 'ApiPath'];
  function InfoController(SignUpService, ApiPath){
    var infoCtrl = this;
    infoCtrl.basePath = ApiPath;

    infoCtrl.isSigned = function(){
      return SignUpService.isSigned();
    };

    infoCtrl.getUser = function(){
      return SignUpService.read();
    };

  }
})();
