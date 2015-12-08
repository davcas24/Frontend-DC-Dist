angular.module('AngularScaffold.Services').factory('usuarioService', ['$http',
	function($http){
		return {
				Getusuario: function(){
					return $http.get("/usuarios");
				},
				Postusuario: function(payload){
					console.log(payload);
					return $http.post("/usuario", payload);

				}
	    };
}]);
