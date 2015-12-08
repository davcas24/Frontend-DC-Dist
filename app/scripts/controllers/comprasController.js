angular.module('AngularScaffold.Controllers')
  .controller('comprasController', ['$state','$scope', 'comprasService', 'indexService', function ($state,$scope, comprasService, indexService) {
  	indexService.setTitle("Compras");
  }]);
