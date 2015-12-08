angular.module('AngularScaffold.Controllers')
  .controller('devoController', ['$state','$scope', 'devoService', 'indexService', function ($state,$scope, devoService, indexService) {
  	indexService.setTitle("Devoluciones");
  }]);
