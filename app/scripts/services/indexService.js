angular.module('AngularScaffold.Services').factory('indexService', ['$http',
	function($http){
		var title = 'Bienvenido!';
	    return {
	    	title: function() { return title; },
	     	setTitle: function(newTitle) { title = newTitle }
	   	};
}]);
