angular.module('AngularScaffold.Controllers')
  .controller('facturacionController', ['$state','$scope', '$sessionStorage', 'facturacionService', 'indexService', 'proveedorService', function ($state,$scope,$sessionStorage, facturacionService, indexService, proveedorService) {
  	indexService.setTitle("Facturacion");

  	$scope.viewBackground = "background-facturacion";

  	function setHeight() {
  		windowHeight = $(window).innerHeight();
  		$('#body_facturacion').css('min-height', windowHeight);
  	};
  	setHeight();  

  	$(window).resize(function() {
  		setHeight();
  	});

  	$scope.inventarioArreglo = [];
  	$scope.inventarioArregloSeleccionado = [];
  	$scope.zona_Venta =  '';
  	$scope.id_Vendedor = $sessionStorage.currentUser.nombre;
  	$scope.id_Cliente = 777;

  	$scope.gocompras = function(){
  		if($scope.inventarioArregloSeleccionado.length == 0)
  			alert('No selecciono ningun producto.');
  		else if ($scope.zona_Venta ==  '')
  			alert('Seleccione una zona de venta.');
  		else{
	  		facturacionService.set($scope.inventarioArregloSeleccionado, $scope.zona_Venta, $scope.id_Vendedor, $scope.id_Cliente);
	  		$state.go('compras');
	  	}
    }

	$(".dropdown-menu li a").click(function(){
		var selText = $(this).text();
		$scope.zona_Venta = selText;
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+'<span class="caret"></span>');
	});

	$scope.loadInventario =  function(){
		proveedorService.GetInventario().then(function(response){
			$scope.inventarioArreglo = response.data;
		}).catch(function(err){
			alert("No se pudo leer el inventario");
		});
	}

	var sum = 0;
	var imp = sum * 0.15;
	var tot = sum + imp;
	$("#TD_SUB").text(imp.toFixed(2));
	$("#TD_IMP").text(imp.toFixed(2));
	$("#TD_TOT").text(tot.toFixed(2));
	$scope.actualizarFactura =  function(){
		var sum = 0;
		var can = 0;
		$scope.inventarioArregloSeleccionado = [];

	    $("table.tablaDario").find('input[type="checkbox"][name^="check1"]:checked').each(function () {
	        var row = $(this).closest('tr').index();
	        sum += parseFloat($(this).parent().siblings('td:nth-last-child(1)').text());
	        $scope.inventarioArregloSeleccionado.push($scope.inventarioArreglo[row]);
	        can++;
	    });
	    var imp = sum * 0.15;
	    var tot = sum + imp;
	    $("#TD_SUB").text(sum.toFixed(2));
	    $("#TD_IMP").text(imp.toFixed(2));
	    $("#TD_TOT").text(tot.toFixed(2));
	    $('#NUM').text(can);
	}

	$scope.deseleccionarTodas =  function(){
	    $("table.tablaDario").find('input[type="checkbox"][name^="check1"]:checked').each(function () {
	        $(this).prop('checked', false);
	        $scope.actualizarFactura();
	    });
	}

	$scope.clearSearch =  function(){
		$scope.search =  '';
		$('#input_search_text').val("");
	}
	
	$scope.sortType     = 'ID';
	$scope.sortReverse  = false;  // set the default sort order
	$scope.searchFish   = '';     // set the default search/filter term


	$scope.filteredProductos = [];
  	$scope.currentPage = 1;
  	$scope.numPerPage = 2;
  	$scope.maxSize = 5;
  
	$scope.$watch('currentPage + numPerPage', function() {
		var begin = (($scope.currentPage - 1) * $scope.numPerPage)
		, end = begin + $scope.numPerPage;
		$scope.filteredProductos = $scope.inventarioArreglo.slice(begin, end);
	});
    
  }]);
