angular.module('AngularScaffold.Services').factory('indexService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'https://dist-dc.herokuapp.com/';
		var title = 'Bienvenido!';
	    return {
	    	title: function() { return title; },
	     	setTitle: function(newTitle) { title = newTitle }
	   	};
}]);
