angular.module('AngularScaffold.Services').factory('facturacionService',  ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		//var baseUrl = 'https://dist-dc.herokuapp.com/';
		var baseUrl = 'http://localhost:8000/';
		
		var inventarioArreglo = [];
		var zona_Venta = '';
		var id_Vendedor = '';
  		var id_Cliente = '';
		var titulo = 'Compras';

		function set(data1, data2, data3, data4) {
			inventarioArreglo = data1.slice();
			zona_Venta = data2;
			id_Vendedor = data3;
			id_Cliente = data4;
		}
		function get() {
			return inventarioArreglo;
		}

		return {
			getTitulo: function(){
				return titulo;
			},
			set: set,
		    get: get,
		    getArray: function(){
		    	return inventarioArreglo;
		    },
		    getZona: function(){
		    	return zona_Venta;
		    },
		    getVendedor: function(){
		    	return id_Vendedor;
		    },
		    getCliente: function(){
		    	return id_Cliente;
		    }
		}
}]);