angular.module('AngularScaffold.Services').factory('devoService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'https://dist-dc.herokuapp.com/';
		//var baseUrl = 'http://localhost:8000';
		return {
				GetUsuario: function(){
					return $http.get(baseUrl + "/usuarios");
				},
				PostStudents: function(payload){
					return $http.post(baseUrl + "/students", payload);
				}
	    };
}]);
