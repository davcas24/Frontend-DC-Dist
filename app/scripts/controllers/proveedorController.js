angular.module('AngularScaffold.Controllers')
  .controller('proveedorController', ['$state','$scope', 'proveedorService', 'indexService', 'HomeService', function ($state,$scope, proveedorService, indexService, HomeService) {
  	indexService.setTitle("Compras a Proveedores");

    $scope.viewBackground = "background-proveedor";

    function setHeight() {
      windowHeight = $(window).innerHeight();
      $('#body_proveedor').css('min-height', windowHeight);
    };
    setHeight();

    $(window).resize(function() {
      setHeight();
    });

    $scope.title = "Lista de Productos"
    $scope.inventario={};
    $scope.inventario_ID = {};
    $scope.inventario_Descripcion = {};
    $scope.inventario_Num_Original = {};
    $scope.inventario_Cantidad = {};
    $scope.inventario_Precio = {};
    $scope.loadID;

  	$scope.inventarioArreglo = [];
		$scope.getInventario = function(){
			proveedorService.GetInventario($scope.inventarioArreglo).then(function(response){
				$scope.inventarioArreglo = response.data;
        if($scope.inventarioArreglo.length == 0)
          $scope.inventario_ID = 1;
        else
          $scope.inventario_ID = parseInt($scope.inventarioArreglo[$scope.inventarioArreglo.length - 1].ID) + 1;
			}).catch(function(err){
        swal("Error", "No se pudo leer el inventario", "error");
			});
		}

		$scope.addInventario =  function(){
      $scope.inventario.inventario_ID = $scope.inventario_ID;
			proveedorService.PostInventario($scope.inventario).then(function(response){
        swal("¡Exito!", "Agregado Exitosamente", "success");
        $scope.getInventario();
			}).catch(function(err){
        swal("Error", "No se pudo agregar el producto", "error");
			});
		}

    $('.dropdown-inverse li > a').click(function(e){
      $('#Boton').text(this.innerHTML);
    });
  }]);
