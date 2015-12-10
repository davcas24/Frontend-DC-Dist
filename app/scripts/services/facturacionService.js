angular.module('AngularScaffold.Services').factory('facturacionService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'https://dist-dc.herokuapp.com/';
		//var baseUrl = 'http://localhost:8000';
		var titulo = 'Compras';

		return {
			getTitulo: function(){
				return titulo;
			}
		}
}]);
