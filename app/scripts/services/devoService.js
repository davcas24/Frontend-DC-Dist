angular.module('AngularScaffold.Services').factory('devoService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'https://dist-dc.herokuapp.com/';
		return {
				GetUsuario: function(){
					return $http.get("/usuarios");
				},
				PostStudents: function(payload){
					return $http.post("/students", payload);
				}
	    };
}]);
