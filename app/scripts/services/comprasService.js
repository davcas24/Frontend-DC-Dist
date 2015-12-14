angular.module('AngularScaffold.Services').factory('comprasService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'https://dist-dc.herokuapp.com/';
		//var baseUrl = 'http://localhost:8000/';

		var titulo = 'Compras';

		return {
			getTitulo: function(){
				return titulo;
			},
			GetFactura: function(){
			return $http.get(baseUrl + "v1/factura");
			},
			PostFactura: function(payload){
				return $http.post(baseUrl + "factura", payload);
			},
			PutInventario: function(payload){
				return $http.put(baseUrl + "v2/inventario", payload);
			},
			DeleteInventario: function(id){
				return $http.delete(baseUrl + "v3/inventario/" + id);
			}
		}
}]);
