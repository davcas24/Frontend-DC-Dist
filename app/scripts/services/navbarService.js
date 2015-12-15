angular.module('AngularScaffold.Services').factory('navbarService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		//var baseUrl = 'https://dist-dc.herokuapp.com/';
		var baseUrl = 'http://localhost:8000/';
		return {
				Logout: function(){
					return $http.get(baseUrl + "logout");
				},
				Login: function(payload){
					return $http.post(baseUrl + "login", payload);
				}
	    };
}]);
