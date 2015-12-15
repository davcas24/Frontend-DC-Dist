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

    $scope.gotousuarios = function(){
      if($sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('Administrador') > -1){
          $state.go('usuario');
      }else{
        alert('No tiene los permisos necesarios');
      }
    }

    $scope.gotoadmin = function(){
      if($sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('Administrador') > -1){
          $state.go('admin');
      }
    }

    $scope.indexService = indexService;

     $scope.checkPage = function(){
     	if ($state.current.name !== "login")
     		$scope.boolLogOut = true;
	   return $scope.boolLogOut;
	 }

   var animationName = 'animated pulse';
    var animatioEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    $('#NF').mouseenter('click', function(){
      $('#NF').addClass(animationName).one(animatioEnd, function(){
        $(this).removeClass(animationName);
      })
    })
    $('#ND').mouseenter('click', function(){
      $('#ND').addClass(animationName).one(animatioEnd, function(){
        $(this).removeClass(animationName);
      })
    })
    $('#NU').mouseenter('click', function(){
      $('#NU').addClass(animationName).one(animatioEnd, function(){
        $(this).removeClass(animationName);
      })
    })
    $('#NA').mouseenter('click', function(){
      $('#NA').addClass(animationName).one(animatioEnd, function(){
        $(this).removeClass(animationName);
      })
    })
    $('#NC').mouseenter('click', function(){
      $('#NC').addClass(animationName).one(animatioEnd, function(){
        $(this).removeClass(animationName);
      })
    })
    $('#NG').mouseenter('click', function(){
      $('#NG').addClass(animationName).one(animatioEnd, function(){
        $(this).removeClass(animationName);
      })
    })
    $('#NS').mouseenter('click', function(){
      $('#NS').addClass(animationName).one(animatioEnd, function(){
        $(this).removeClass(animationName);
      })
    })

  }]);
