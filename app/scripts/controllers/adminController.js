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
