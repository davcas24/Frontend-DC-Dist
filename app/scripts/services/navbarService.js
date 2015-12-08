angular.module('AngularScaffold.Services').factory('navbarService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'https://dist-dc.herokuapp.com/';
		return {
				Logout: function(){
					return $http.get("logout");
				},
				Login: function(payload){
					return $http.post("login", payload);
				}
	    };
}]);
