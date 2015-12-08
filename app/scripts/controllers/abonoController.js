angular.module('AngularScaffold.Controllers')
  .controller('abonoController', ['$state','$scope', 'abonoService', 'indexService', function ($state,$scope, abonoService, indexService) {

  	indexService.setTitle("Abonos");

      $scope.goadmin = function(){
        $state.go('admin');
        }

  }]);
