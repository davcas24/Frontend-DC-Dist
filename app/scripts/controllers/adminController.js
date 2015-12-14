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

    $scope.gotoproveedor = function(){
      if($sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('Administrador') > -1){
          $state.go('proveedor');
      }else{
        alert('No tiene los permisos necesarios');
      }
    }

    var animationName = 'animated pulse';
    var animatioEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    $('#user_btFac').mouseenter('click', function(){
      $('#user_btFac').addClass(animationName).one(animatioEnd, function(){
        $(this).removeClass(animationName);
      })
    })

    $('#user_btDev').mouseenter('click', function(){
      $('#user_btDev').addClass(animationName).one(animatioEnd, function(){
        $(this).removeClass(animationName);
      })
    })

    $('#user_btUsu').mouseenter('click', function(){
      $('#user_btUsu').addClass(animationName).one(animatioEnd, function(){
        $(this).removeClass(animationName);
      })
    })

    $('#Abonos').mouseenter('click', function(){
      $('#Abonos').addClass(animationName).one(animatioEnd, function(){
        $(this).removeClass(animationName);
      })
    })

    $('#Compras').mouseenter('click', function(){
      $('#Compras').addClass(animationName).one(animatioEnd, function(){
        $(this).removeClass(animationName);
      })
    })
    
    $('#Dei').mouseenter('click', function(){
      $('#Dei').addClass(animationName).one(animatioEnd, function(){
        $(this).removeClass(animationName);
      })
    })

    indexService.setTitle("Bienvenido!");
  }]);
