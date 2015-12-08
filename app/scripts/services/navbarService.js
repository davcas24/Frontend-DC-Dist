angular.module('AngularScaffold.Services').factory('navbarService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'https://http://David:8000/';
		return {
				Logout: function(){
					return $http.get("logout");
				},
				Login: function(payload){
					return $http.post("login", payload);
				}
	    };
}]);
