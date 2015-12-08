angular.module('AngularScaffold.Services').factory('adminService', ['$http',
	function($http){
		return {
				Getusuario: function(){
					return $http.get("/usuario");
				},
				Postusuario: function(payload){
					return $http.post("/usuario", payload);
				}
	    };
}]);
