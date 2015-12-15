angular.module('AngularScaffold.Services').factory('AuthService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		//var baseUrl = 'https://dist-dc.herokuapp.com/';
		var baseUrl = 'http://localhost:8000/';
		return {
				Logout: function(){
					return $http.get(baseUrl + "logout");
				},
				Login: function(payload){
					//console.log("aqui");
					return $http.post(baseUrl + "login", payload);
				}
	    };
}]);
