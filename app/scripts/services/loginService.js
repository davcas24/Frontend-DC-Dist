angular.module('AngularScaffold.Services').factory('loginService', ['$http',
	function($http){
		
		return {
				GetStudents: function(){
					return $http.get("/students");
				},
				PostStudents: function(payload){
					return $http.post("/students", payload);
				}
	    };
}]);
