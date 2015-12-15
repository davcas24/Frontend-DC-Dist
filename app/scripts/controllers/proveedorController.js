angular.module('AngularScaffold.Controllers')
  .controller('proveedorController', ['$state','$scope', 'proveedorService', 'comprasService', 'indexService', 'HomeService', 'usuarioService', function ($state,$scope, proveedorService, comprasService,indexService, HomeService, usuarioService) {
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
          if ( String($scope.inventarioArreglo[i].Descripcion) === String($scope.inventario.inventario_Descripcion) ){
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

    $scope.getText = function(nombre){
      var selText = nombre;
      $scope.factura_nombre_Proveedor = selText;
      $("#Proveedor").html(selText+'<span class="caret"></span>');
    }


    $scope.proveedores=[];
    $scope.usuarios=[];
    $scope.factura_nombre_Proveedor='';
    $scope.accion={};
    $scope.fecha={};
    $scope.cant={};
    $scope.loadProveedores =  function(){
      usuarioService.Getusuario().then(function(response){
      $scope.usuarios = response.data;
      for (var i = 0; i < $scope.usuarios.length; i++) {
        if (String($scope.usuarios[i].scope) == 'Proveedor' )
          $scope.proveedores.push($scope.usuarios[i]);
      };
      }).catch(function(err){
      //  alert(err.data.error + " " + err.data.message)
      });
    }

    $scope.agregarAccion = function(){
      if($scope.factura_nombre_Proveedor != ''){
        var index;
        for (var i = 0; i < $scope.proveedores.length; i++) {
          if ( $scope.proveedores[i].nombre == $scope.factura_nombre_Proveedor ) {            
            $scope.fecha = $('#fecha').val();
            $scope.accion = $('#descripcion').val();
            $scope.cant = $('#cant').val();
            $scope.proveedores[i].tabla.push($scope.fecha);
            $scope.proveedores[i].tabla.push($scope.accion);
            $scope.proveedores[i].tabla.push($scope.cant);
            index =  i;
          }
        }
        usuarioService.Putusuarios($scope.proveedores[index]).then(function(response){
          swal("¡Exito!","success");
        }).catch(function(err){
        //  alert(err.data.error + " " + err.data.message)
        });
      } else
        swal("Error", "Seleccione un proveedor","error");
    }
  }]);
