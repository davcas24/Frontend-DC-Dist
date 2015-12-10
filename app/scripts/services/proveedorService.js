angular.module('AngularScaffold.Services').factory('proveedorService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		//var baseUrl = 'https://dist-dc.herokuapp.com/';
		var baseUrl = 'http://localhost:8000/';

		var titulo = 'Compras a Proveedores';

		return {
			getTitulo: function(){
				return titulo;
			},
			GetInventario: function(){
			return $http.get(baseUrl + "v1/inventario");
			},
			PostInventario: function(payload){
				return $http.post(baseUrl + "inventario", payload);
			}
		}
}]);