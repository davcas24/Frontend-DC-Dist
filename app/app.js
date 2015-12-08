var app = angular.module('AngularScaffold', ['ui.router', 'AngularScaffold.Services', 'AngularScaffold.Controllers', 'ngRoute', 'ngStorage']);
var highcharts = angular.module('highcharts', ["highcharts-ng"]);

angular.module('AngularScaffold.Controllers', []);
angular.module('AngularScaffold.Services', []);

app.config(['$stateProvider', '$urlRouterProvider', '$routeProvider', function($stateProvider, $urlRouterProvider, $routeProvider) {
	$urlRouterProvider.otherwise('login');
	$stateProvider
        .state('login', {
            url: '/login',
            templateUrl: '/views/login.html',
            controller: 'loginController',
            name: "login",
            data: {
              pageTitle: 'Distribuidora DC'
            }
        })
				.state('charts', {
            url: '/DEI',
            templateUrl: '/views/charts.html',
            controller: 'chartsController',
            data: {
              pageTitle: 'Distribuidora DC - Graficas'
            }
        })
				.state('abono', {
            url: '/abono',
            templateUrl: '/views/abono.html',
            controller: 'abonoController',
            data: {
              pageTitle: 'Distribuidora DC - Abonos'
            }
        })
				.state('admin', {
            url: '/admin',
            templateUrl: '/views/admin.html',
            controller: 'adminController',
            data: {
              pageTitle: 'Distribuidora DC - Bienvenido'
            }
        })
        .state('facturacion', {
        		url: '/facturacion',
            templateUrl: '/views/facturacion.html',
            controller: 'facturacionController',
            data: {
              pageTitle: 'Distribuidora DC - Facturas'
            }
        })
        .state('compras', {
            url: '/compras',
            templateUrl: '/views/compras.html',
            controller: 'comprasController',
            data: {
              pageTitle: 'Distribuidora DC - Compras'
            }
        })
				.state('usuario', {
            url: '/usuario',
            templateUrl: '/views/usuario.html',
            controller: 'usuarioController',
            data: {
              pageTitle: 'Distribuidora DC - Usuario'
            }
        })
				.state('devo', {
            url: '/Devoluciones',
            templateUrl: '/views/devo.html',
            controller: 'devoController',
            data: {
              pageTitle: 'Distribuidora DC - Devoluciones'
            }
        })
        .state('index', {
            url: '/index',
            templateUrl: '/index.html',
            controller: 'indexController'
        })

        $routeProvider
            .when('/compras', {template: 'views/compras.html', controller: 'comprasController'})
            .when('/facturacion', {template: '/views/facturacion.html', controller: 'facturacionController'})
            .when('/abono', {template: '/views/abono.html', controller: 'abonoController'});
}]);

app.run(function($rootScope, $state) {
  $rootScope.$on("$routeChangeSuccess", function(currentRoute, previousRoute){
    $rootScope.title = $route.current.title;
  });
  $rootScope.$state = $state;
});

app.directive('updateTitle', ['$rootScope', '$timeout',
  function($rootScope, $timeout) {
    return {
      link: function(scope, element) {

        var listener = function(event, toState) {

          var title = 'Distribuidora DC - Bienvenido!';
          if (toState.data && toState.data.pageTitle) title = toState.data.pageTitle;

          $timeout(function() {
            element.text(title);
          }, 0, false);
        };

        $rootScope.$on('$stateChangeSuccess', listener);
      }
    };
  }
]);
