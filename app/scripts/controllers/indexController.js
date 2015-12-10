angular.module('AngularScaffold.Controllers')
  .controller('indexController', ['AuthService','$state','$scope', 'indexService','navbarService','$rootScope', '$sessionStorage',
  function (AuthService,$state,$scope, indexService,navbarService, $rootScope, $sessionStorage) {

    $scope.boolLogOut = false;
    $scope.user = {};
    $scope.$sessionStorage = $sessionStorage;
    $scope.booladmin = false;

    /*$scope.isAdmin = function(){
       $scope.booladmin = $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('Administrador') > -1;
       console.console.log($sessionStorage.currentUser.scope);
    }*/

    $scope.logout = function(){
      AuthService.Logout().then(function(response){
        //alert('logged out correctly');
        $sessionStorage.$reset();
        $state.go('login');
      }).catch(function(err){
        alert(err.data.error + " " + err.data.message);
      })
    }

  	$scope.gofacturacion = function(){
  		$state.go('facturacion');
    }

    $scope.gograficas = function(){
      $scope.booladmin = $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('Administrador') > -1;
      if($scope.booladmin){
          $state.go('charts');
      }else{
        alert('No tiene los permisos necesarios');
      }

    }

    $scope.godevoluciones = function(){
      $scope.booladmin = $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('Administrador') > -1;
      if($scope.booladmin){
          $state.go('devo');
      }else{
        alert('No tiene los permisos necesarios');
      }
    }

    $scope.goabonos = function(){
      $scope.booladmin = $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('Administrador') > -1;
      if($scope.booladmin){
          $state.go('abono');
      }else{
        alert('No tiene los permisos necesarios');
      }
    }

    $scope.gotoproveedor = function(){
      if($sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('Administrador') > -1){
          $state.go('proveedor');
      }else{
        alert('No tiene los permisos necesarios');
      }
    }

    $scope.indexService = indexService;

     $scope.checkPage = function(){
     	if ($state.current.name !== "login")
     		$scope.boolLogOut = true;
	   return $scope.boolLogOut;
	 }

  }]);
