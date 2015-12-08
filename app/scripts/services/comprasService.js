angular.module('AngularScaffold.Services').factory('comprasService', ['$http',
	function($http){
		var titulo = 'Compras';

		return {
			getTitulo: function(){
				return titulo;
			}
		}
}]);