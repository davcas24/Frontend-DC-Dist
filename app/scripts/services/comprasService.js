angular.module('AngularScaffold.Services').factory('comprasService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		//var baseUrl = 'http://localhost:8000';
		var baseUrl = 'https://dist-dc.herokuapp.com/';
		var titulo = 'Compras';

		return {
			getTitulo: function(){
				return titulo;
			}
		}
}]);
