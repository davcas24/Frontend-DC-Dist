angular.module('AngularScaffold.Services').factory('AuthService', ['$http',
	function($http){
		return {
				Logout: function(){
					return $http.get("/logout");
				},
				Login: function(payload){
					//console.log("aqui");
					return $http.post("login", payload);
				}
	    };
}]);
