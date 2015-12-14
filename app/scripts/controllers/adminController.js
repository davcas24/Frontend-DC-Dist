angular.module('AngularScaffold.Controllers')
  .controller('adminController', ['AuthService','$state','$scope', 'adminService', 'indexService','$rootScope', '$sessionStorage',
   function (AuthService,$state,$scope, adminService, indexService, $rootScope, $sessionStorage) {

    $scope.gousuario = function(){
          $state.go('usuario');
    }

    $scope.goabono = function(){
        alert('No tiene los permisos necesarios');
    }

    $scope.gotocharts = function(){
          $state.go('charts');
    }

    $scope.gofacturacion = function(){
      $state.go('facturacion');
    }

    $scope.gotodevo = function(){
      $state.go('devo');
    }

    $scope.gotoproveedor = function(){
      $state.go('proveedor');
    }

    indexService.setTitle("Bienvenido!");
  }]);
