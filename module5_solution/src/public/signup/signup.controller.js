(function(){
  'use strict'
  angular.module("public")
  .controller("SignUpController", SignUpController);

  SignUpController.$inject = ['MenuService', 'SignUpService'];
  function SignUpController(MenuService, SignUpService){
    var signupCtrl = this;

    signupCtrl.validate = function (shortName) {
      MenuService.getMenuItem(shortName).then(function (response) {
        signupCtrl.error = null;
      }, function (error) {
        signupCtrl.error = "No such menu number exists";
      })
    };

    signupCtrl.submit = function(shortName){
      MenuService.getMenuItem(shortName)
      .then(function (response) {
        SignUpService.store(signupCtrl.signup, response.data);
        signupCtrl.error = null;
        signupCtrl.success = "Your information has been saved";
      }, function (error) {
        signupCtrl.success = null;
        signupCtrl.error = "No such menu number exists"
      });

    };

  }
})();
