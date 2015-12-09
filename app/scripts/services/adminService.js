angular.module('AngularScaffold.Services').factory('adminService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'https://dist-dc.herokuapp.com/';
		return {
				Getusuario: function(){
					return $http.get(baseUrl + "/usuario");
				},
				Postusuario: function(payload){
					return $http.post(baseUrl + "/usuario", payload);
				}
	    };
}]);
