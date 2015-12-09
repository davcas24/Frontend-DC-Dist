angular.module('AngularScaffold.Services').factory('usuarioService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'https://dist-dc.herokuapp.com/';
		return {
				Getusuario: function(){
					return $http.get(baseUrl + "/usuarios");
				},
				Postusuario: function(payload){
					console.log(payload);
					return $http.post(baseUrl + "/usuario", payload);

				}
	    };
}]);
