angular.module('AngularScaffold.Services').factory('AuthService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'https://dist-dc.herokuapp.com/';
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
