angular.module('AngularScaffold.Services').factory('chartsService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		//var baseUrl = 'https://dist-dc.herokuapp.com/';
		var baseUrl = 'http://localhost:8000/';
		return {
			GetFactura: function(){
				return $http.get(baseUrl + "factura");
			}
		}
}]);
