angular.module('AngularScaffold.Services').factory('abonoService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'https://dist-dc.herokuapp.com/';
		return {
				GetStudents: function(){
					return $http.get(baseUrl + "/students");
				},
				PostStudents: function(payload){
					return $http.post("/students", payload);
				}
	    };
}]);
