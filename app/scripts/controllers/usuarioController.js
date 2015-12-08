angular.module('AngularScaffold.Controllers')
  .controller('usuarioController', ['$state','$scope', 'usuarioService', function ($state,$scope, usuarioService) {
      $scope.title = "Lista de Usuarios"
      $scope.user={};
      $scope.user_name = {};
      $scope.user_password = {};
      $scope.user_dire = {};
      $scope.user_cel = {};
      $scope.user_user = {};
      $scope.user_zona = {};
      $scope.user_fijo = {};
      $scope.user_mail = {};
      $scope.user_tabla = [];

      console.log("el anterior es el usuario");
      $scope.Postusuario = function(){
        console.log($scope.user);
        usuarioService.Postusuario($scope.user).then(function(response){
          alert("Posted to /usuario");

        }).catch(function(err){
          alert("Error posting to usuario");
        });
      }


  }]);
