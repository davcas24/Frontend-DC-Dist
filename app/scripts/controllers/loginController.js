angular.module('AngularScaffold.Controllers')
  .controller('loginController', ['$state','$scope', 'loginService', 'indexService','AuthService', '$rootScope', '$sessionStorage',
   function ($state,$scope, loginService, indexService, authService, $rootScope, $sessionStorage) {
  	  indexService.setTitle("Distribuidora DC");
      //$scope.goadmin = function(){
      //  $state.go('admin');
      //}
      $scope.user = {};
      $scope.$sessionStorage = $sessionStorage;
      $scope.boollog = false;

      $scope.login = function(user){
          authService.Login(user).then(function(response){
          $sessionStorage.currentUser = response.data;
          $scope.user = {};
          console.log($sessionStorage.currentUser.nombre);
          console.log($sessionStorage.length);
          if($sessionStorage.currentUser.nombre === ""){
            console.log("empty");
            $scope.boollog = true;
          }
          if($scope.boollog == false){
              $state.go('admin');
          }else{
            alert("Error");
          }
        }).catch(function(err){
          console.log((err.data.error + " " + err.data.message));
        });
      }

  }]);

  //angular.module('AngularScaffold.Controllers')
  //  .controller('NavbarController', ['AuthService', '$scope', '$rootScope', '$sessionStorage',  function (authService, $scope, $rootScope, $sessionStorage) {
