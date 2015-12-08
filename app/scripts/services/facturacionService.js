angular.module('AngularScaffold.Services').factory('facturacionService', ['$http',
	function($http){
		var titulo = 'Compras';

		return {
			getTitulo: function(){
				return titulo;
			}
		}
}]);