angular.module('AngularScaffold.Controllers')
  .controller('usuarioController', ['$state','$scope', 'usuarioService', function ($state,$scope, usuarioService) {
    $scope.title = "Lista de Usuarios"
    $scope.user={};
    $scope.user2={};
    $scope.user_show={};
    $scope.user_tabla = [];
    $scope.users=[];

    $scope.getusuario = function(){
      usuarioService.Getusuario().then(function(response){
        $scope.users = response.data;
        console.log($scope.users);
      }).catch(function(err){
        alert(err.data.error + " " + err.data.message)
      });
    }

    $scope.getusuario();

    $scope.change = function() {
        console.log("balalala de change"+ $scope.user2);
        if ($scope.user2=="Seleccione usuario") {
          console.log("balalala entro perras putas zorras magayas"+ $scope.user2);
          /*$scope.user.nombre=default;
          $scope.user.password=default;
          $scope.user.direccion=default;
          $scope.user.correo=default;
          $scope.user.celular=default;
          $scope.user.tel_fijo=default;
          //$scope.user.zona=;*/
        }
        for (var i = 0; i < $scope.users.length; i++) {

          if ($scope.users[i].nombre== $scope.user2) {

            $scope.user.nombre=$scope.users[i].nombre;
            $scope.user.password=$scope.users[i].password;
            $scope.user.direccion=$scope.users[i].direccion;
            $scope.user.correo=$scope.users[i].correo;
            $scope.user.celular=$scope.users[i].celular;
            $scope.user.tel_fijo=$scope.users[i].tel_fijo;
            $scope.user.zona=$scope.users[i].zona;

          }
        }
    }

      $scope.Postusuario = function(){
        console.log($scope.user + " soy frontend controller");
        usuarioService.Postusuario($scope.user).then(function(response){
          alert("Posted to /usuario");
          $scope.getusuario();
        }).catch(function(err){
          alert("Error posting to usuario");
        });
      }


  }]);
