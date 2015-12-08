angular.module('AngularScaffold.Controllers')
  .controller('facturacionController', ['$state','$scope', 'facturacionService', 'indexService', function ($state,$scope, facturacionService, indexService) {
  	indexService.setTitle("Facturacion");

  	$scope.gocompras = function(){
  		$state.go('compras');
    }
    
  }]);
