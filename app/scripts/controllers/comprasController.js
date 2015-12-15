angular.module('AngularScaffold.Controllers')
  .controller('comprasController', ['$state','$scope', 'comprasService', 'indexService', 'facturacionService', function ($state,$scope, comprasService, indexService, facturacionService) {
  	indexService.setTitle("Compras");

  	$scope.viewBackground = "background-compras";

  	function setHeight() {
  		windowHeight = $(window).innerHeight();
  		$('#body_facturacion').css('min-height', windowHeight);
  	};
  	setHeight();

  	$(window).resize(function() {
  		setHeight();
  	});

  	$scope.inventarioArreglo = [];
  	$scope.inventarioArregloCantidad = [];
  	$scope.zona_Venta = facturacionService.getZona();
  	$scope.id_Vendedor = facturacionService.getVendedor();
  	$scope.id_Cliente = facturacionService.getCliente();
  	$scope.total = null;

  	$scope.loadInventario =  function(){
		$scope.inventarioArreglo = facturacionService.getArray();
		$scope.actualizarFacturaPrincipio();
	}

	$scope.deseleccionarTodas =  function(){
	    $("table.tablaDario").find('input[type="checkbox"][name^="check1"]:checked').each(function () {
	        $(this).prop('checked', false);
	    });
	}

	$scope.seleccionarTodas =  function(){
	    $("table.tablaDario").find('input[type="checkbox"][name^="check1"]:not(:checked)').each(function () {
	        $(this).prop('checked', true);
	    });
	}

	$scope.quitar =  function(){
	    $("table.tablaDario").find('input[type="checkbox"][name^="check1"]:checked').each(function () {
	        var row = $(this).closest('tr').index();
	        $scope.inventarioArreglo.splice(row,1);
	        $scope.actualizarFactura();
	    });
	}

	$scope.actualizarFactura =  function(){
		var sum = 0;
		var pos = 0;
		$scope.inventarioArregloCantidad = [];
	    $("table.tablaDario").find('input[type="number"][name^="cant"]').each(function () {
			var producto;
			console.log('hola ' + $(this).val());
			for(var i = 0; i < $scope.inventarioArreglo.length; i++){
				if(pos == i)
		        	var producto = $scope.inventarioArreglo[i];
		    }
		    if( $(this).val() != ''){
			    $scope.inventarioArregloCantidad.push( $(this).val() );
				sum += (producto.Precio * $(this).val());
			} else{
				$scope.inventarioArregloCantidad.push( 1 );
				sum += (producto.Precio * 1);
			}
			pos++;
	    });
	    var imp = sum * 0.15;
	    var tot = sum + imp;
	    $scope.total = tot;
	    $("#TD_SUB").text(sum.toFixed(2));
	    $("#TD_IMP").text(imp.toFixed(2));
	    $("#TD_TOT").text(tot.toFixed(2));
	}

	$scope.actualizarFacturaPrincipio =  function(){
		var sum = 0;
		$scope.inventarioArregloCantidad = [];
	    for(var i = 0; i < $scope.inventarioArreglo.length; i++){
	        var producto = $scope.inventarioArreglo[i];
	        sum += (producto.Precio * 1);
	        $scope.inventarioArregloCantidad.push( 1 );
	    }
	    var imp = sum * 0.15;
	    var tot = sum + imp;
	    $scope.total = tot;
	    $("#TD_SUB").text(sum.toFixed(2));
	    $("#TD_IMP").text(imp.toFixed(2));
	    $("#TD_TOT").text(tot.toFixed(2));
	}

	//Metodos para conectar con la db
	/*
		nombre_Cliente : String,
		Dia : String,
		Mes : String,
		Anio : String,
		zona : String,
		ID_Vendedor : String,
		total : Number,
		tabla : []
	*/
	$scope.title = "Lista de Facturas"
    $scope.factura={};
    $scope.factura_ID={};
    $scope.factura_nombre_Cliente = {};
    $scope.factura_Dia = {};
    $scope.factura_Mes = {};
    $scope.factura_Anio = {};
    $scope.factura_zona = {};
    $scope.factura_ID_Vendedor = {};
    $scope.factura_total = {};
    $scope.factura_tabla = [];
    $scope.cantidad = [];

    //No se ocupa leer las facturas en esta parte
    /*
    $scope.facturasArreglo = [];
	$scope.getFactura = function(){
		comprasService.GetFactura($scope.facturasArreglo).then(function(response){
			$scope.facturasArreglo = response.data;
		}).catch(function(err){
			alert("No se pudo leer las facturas");
		});
	} */

	$scope.addFactura =  function(){
		var pasoCantidad = false;
		var pos = 0;
		$("table.tablaDario").find('input[type="number"][name^="cant"]').each(function () {
			var producto;
			for(var i = 0; i < $scope.inventarioArreglo.length; i++){
				if(pos == i)
		        	var producto = $scope.inventarioArreglo[i];
		    }
	        if($(this).val() > producto.Cantidad){
				swal("El producto " + producto.Descripcion + " pasa de la cantidad disponible en el inventario. (Cantidad disponible: "
					+ producto.Cantidad + ")","error");
				pasoCantidad = true;
			}
			pos++;
	    });

		if (pasoCantidad == false){
			$scope.readyData();
			console.log('Cliente = ' + $scope.factura_nombre_Cliente);
			console.log('Dia = ' + $scope.factura_Dia);
			console.log('Mes = ' + $scope.factura_Mes);
			console.log('Ano = ' + $scope.factura_Anio);
			console.log('Zona = ' + $scope.factura_zona);
			console.log('Vendedor = ' + $scope.factura_ID_Vendedor);
			console.log('Total = ' + $scope.factura_total);
			console.log('Tabla = ' + $scope.factura_tabla);
			for (var i = 0; i < $scope.inventarioArreglo.length; i++) {
				var cantidad;
				$scope.inventarioArreglo[i];
				cantidad = $scope.inventarioArreglo[i].Cantidad - $scope.inventarioArregloCantidad[i];
				$scope.inventarioArreglo[i].Cantidad = cantidad;
				if(cantidad == 0){
					comprasService.DeleteInventario($scope.inventarioArreglo[i].ID).then(function(response){
					  swal("¡Exito!", "Se borro el elemento", "success");
					}).catch(function(err){
						swal("Error", "No se pudo borrar", "error");
					});
				} else{
					comprasService.PutInventario($scope.inventarioArreglo[i]).then(function(response){
				      swal("Modificado!", "success");
				    }).catch(function(err){
				      swal("Error", "error");
				    });
				}
			};
			comprasService.PostFactura($scope.factura).then(function(response){
				swal("Exito en la Factura!", "Factura Exitosa", "success");
				$state.go('facturacion');
			}).catch(function(err){
				swal("Error","No se pudo facturar", "error");
			});
		}
	}

	$scope.readyData =  function(){
		var fecha = new Date();
		var dia = fecha.getDate();
		var mes = fecha.getMonth()+1;
		var anio = fecha.getFullYear();

		$scope.factura_Dia = dia;
		$scope.factura_Mes = mes;
		$scope.factura_Anio = anio;

		$scope.factura_nombre_Cliente = $scope.id_Cliente;
		$scope.factura_ID_Vendedor = $scope.id_Vendedor;
		$scope.factura_total = $scope.total;
		$scope.factura_zona = $scope.zona_Venta;
		$scope.factura_tabla = $scope.inventarioArreglo;

		$scope.factura.factura_ID = $scope.factura_ID;
		$scope.factura.factura_nombre_Cliente = $scope.factura_nombre_Cliente;
		$scope.factura.factura_Dia = $scope.factura_Dia;
		$scope.factura.factura_Mes = $scope.factura_Mes;
		$scope.factura.factura_Anio = $scope.factura_Anio;
		$scope.factura.factura_zona = $scope.factura_zona;
		$scope.factura.factura_ID_Vendedor = $scope.factura_ID_Vendedor;
		$scope.factura.factura_total = $scope.factura_total;
		$scope.factura.factura_tabla = $scope.factura_tabla;
	}

	$scope.facturasArreglo = [];
	$scope.loadFactura =  function(){
		comprasService.GetFactura($scope.facturasArreglo).then(function(response){
			$scope.facturasArreglo = response.data;
      if($scope.facturasArreglo.length == 0)
	          $scope.factura_ID = 1;
	        else
	          $scope.factura_ID = parseInt($scope.facturasArreglo[$scope.facturasArreglo.length - 1].ID) + 1;
		}).catch(function(err){
			swal("Error", "No se pudo leer el inventario", "error")
		});
  }
  }]);
