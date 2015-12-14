angular.module('AngularScaffold.Controllers')
  .controller('proveedorController', ['$state','$scope', 'proveedorService', 'comprasService', 'indexService', 'HomeService', function ($state,$scope, proveedorService, comprasService,indexService, HomeService) {
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
        var indexID;
        for (var i = 1 ; i <= $scope.inventarioArreglo.length; i++) {
          indexID = false;
          for (var j = 1 ; j <= $scope.inventarioArreglo.length; j++) {
            if(i == $scope.inventarioArreglo[j - 1].ID){
              indexID = true;
              break;
            }
          }
          if($scope.inventarioArreglo.length == 0 && indexID == false)
            $scope.inventario_ID = 1;
          else if (indexID == false){
            $scope.inventario_ID = i;
            break;
          }
          else
            $scope.inventario_ID = parseInt($scope.inventarioArreglo[$scope.inventarioArreglo.length - 1].ID) + 1;
        };
        //console.log('pos = ' + posID + '  arr = ' + $scope.inventarioArreglo[posID].ID);
        
			}).catch(function(err){
        swal("Error", "No se pudo leer el inventario", "error");
			});
		}

		$scope.addInventario =  function(){
      $scope.inventario.inventario_ID = $scope.inventario_ID;
      var agregarbool = true;
      for (var i =  0; i < $scope.inventarioArreglo.length; i++) {
        if ($scope.inventarioArreglo[i].Num_Original == $scope.inventario.inventario_Num_Original){
          console.log(String($scope.inventarioArreglo[i].Descripcion) === String($scope.inventario.inventario_Descripcion) );
          if ( String($scope.inventarioArreglo[i].Descripcion) === String($scope.inventario.inventario_Descripcion) ){
            console.log($scope.inventarioArreglo[i].Descripcion);
            console.log($scope.inventario.inventario_Descripcion);
            $scope.inventarioArreglo[i].Cantidad = $scope.inventarioArreglo[i].Cantidad + parseInt($scope.inventario.inventario_Cantidad);
            $scope.inventarioArreglo[i].Precio = $scope.inventario.inventario_Precio;
            agregarbool = false;
            comprasService.PutInventario($scope.inventarioArreglo[i]).then(function(response){
              swal("Modificado!", "success");              
            }).catch(function(err){
              swal("Error", "error");
            });
            break;
          } else{
            swal("Numero Original ya esta en la base de datos", "error");
            agregarbool = false;
            break;
          }
        }
      };
      if(agregarbool == true){
  			proveedorService.PostInventario($scope.inventario).then(function(response){
          swal("¡Exito!", "Agregado Exitosamente", "success");
          $scope.getInventario();
  			}).catch(function(err){
          swal("Error", "No se pudo agregar el producto", "error");
  			});
      }
		}

    $('.dropdown-inverse li > a').click(function(e){
      $('#Boton').text(this.innerHTML);
    });
  }]);
