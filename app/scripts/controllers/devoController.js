angular.module('AngularScaffold.Controllers')
  .controller('devoController', ['$state','$scope', 'devoService', 'indexService', function ($state,$scope, devoService, indexService) {
  	indexService.setTitle("Devoluciones");
    $scope.users = [];
    $scope.getUsuario = function(){
      devoService.GetUsuario().then(function(response){
        $scope.users = response.data;
        console.log($scope.users);
      }).catch(function(err)){
        alert(err.data.error + "" + err.data.message);
      });
    }

  }]);
