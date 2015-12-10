angular.module('AngularScaffold.Controllers')
  .controller('adminController', ['AuthService','$state','$scope', 'adminService', 'indexService','$rootScope', '$sessionStorage',
   function (AuthService,$state,$scope, adminService, indexService, $rootScope, $sessionStorage) {

    $scope.gousuario = function(){
      if($sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('Administrador') > -1){
          $state.go('usuario');
      }else{
        alert('No tiene los permisos necesarios');
      }
    }

    $scope.goabono = function(){
      if($sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('Administrador') > -1){
          $state.go('abono');
      }else{
        alert('No tiene los permisos necesarios');
      }
    }

    $scope.gotocharts = function(){
      if($sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('Administrador') > -1){
          $state.go('charts');
      }else{
        alert('No tiene los permisos necesarios');
      }
    }

    $scope.gofacturacion = function(){
      $state.go('facturacion');
    }

    $scope.gotodevo = function(){
      if($sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('Administrador') > -1){
          $state.go('devo');
      }else{
        alert('No tiene los permisos necesarios');
      }
    }

    indexService.setTitle("Bienvenido!");
  }]);
