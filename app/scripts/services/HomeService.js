angular.module('AngularScaffold.Services').factory('HomeService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		//var baseUrl = 'https://dist-dc.herokuapp.com/';
		var baseUrl = 'http://localhost:8000/';
		return {
				GetStudents: function(){
					return $http.get(baseUrl + "v1/students");
				},
				PostStudents: function(payload){
					return $http.post(baseUrl + "v1/student", payload);
				}
	    };
}]);
