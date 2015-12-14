angular.module('AngularScaffold.Services').factory('indexService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		//var baseUrl = 'https://dist-dc.herokuapp.com/';
		var baseUrl = 'http://localhost:8000/';
		var title = 'Bienvenido!';
	    return {
	    	title: function() { return title; },
	     	setTitle: function(newTitle) { title = newTitle }
	   	};
}]);
