angular.module('AngularScaffold.Services').factory('usuarioService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		//var baseUrl = 'http://localhost:8000';
		var baseUrl ='https://dist-dc.herokuapp.com/'
		return {
				Getusuario: function(){
					return $http.get(baseUrl + "/usuarios");
				},
				Postusuario: function(payload){
					console.log(payload + " llego al service");
					return $http.post(baseUrl + "/usuario", payload);

				}
	    };
}]);
