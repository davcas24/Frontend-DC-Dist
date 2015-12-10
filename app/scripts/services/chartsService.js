angular.module('AngularScaffold.Services').factory('chartsService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'https://dist-dc.herokuapp.com/';
		//var baseUrl = 'http://localhost:8000';
		return {
				GetStudents: function(){
					return $http.get(baseUrl + "/students");
				},
				PostStudents: function(payload){
					return $http.post(baseUrl + "/students", payload);
				}
	    };
}]);
