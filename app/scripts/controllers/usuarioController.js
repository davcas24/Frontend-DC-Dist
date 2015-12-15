angular.module('AngularScaffold.Controllers')
  .controller('usuarioController', ['$state','$scope', 'usuarioService', function ($state,$scope, usuarioService) {
    $scope.title = "Lista de Usuarios"
    $scope.user={};
    $scope.user2={};
    $scope.user_show={};
    $scope.user_tabla = [];
    $scope.users=[];
    $scope.boolfecha = true;
    $scope.boolaccion = false;
    $scope.boolmonto = false;
    $scope.fechas=[];
    $scope.accions=[];
    $scope.montos=[];
    $scope.fecha=String;
    $scope.accion=String;
    $scope.monto=Number;



    $scope.getusuario = function(){
      usuarioService.Getusuario().then(function(response){
        $scope.users = response.data;
        console.log($scope.users);
      }).catch(function(err){
        alert(err.data.error + " " + err.data.message)
      });
    }

    $scope.getusuario();

    $scope.change = function() {
        console.log("balalala de change"+ $scope.user2);
        if ($scope.user2 == "") {
          console.log("balalala entro perras putas zorras magayas"+ $scope.user2);
          $scope.user.nombre="";
          $scope.user.password="";
          $scope.user.direccion="";
          $scope.user.correo="";
          $scope.user.celular="";
          $scope.user.tel_fijo="";
          $scope.user.zona= "";
          $scope.fechas=[];
          $scope.accions=[];
          $scope.montos=[];
          $scope.debe="";

        }
        for (var i = 0; i < $scope.users.length; i++) {

          if ($scope.users[i].nombre== $scope.user2) {

            $scope.user.nombre=$scope.users[i].nombre;
            $scope.user.password=$scope.users[i].password;
            $scope.user.direccion=$scope.users[i].direccion;
            $scope.user.correo=$scope.users[i].correo;
            $scope.user.celular=$scope.users[i].celular;
            $scope.user.tel_fijo=$scope.users[i].tel_fijo;
            $scope.user.zona=$scope.users[i].zona;
            $scope.user_tabla=$scope.users[i].tabla;

            $scope.fechas=[];
            $scope.accions=[];
            $scope.montos=[];
            $scope.boolfecha = true;
            $scope.boolaccion = false;
            $scope.boolmonto = false;
            $scope.debe=0;
            for (var j = 0; j < $scope.user_tabla.length; j++) {
              if ($scope.boolfecha==true) {
                $scope.boolfecha = false;
                $scope.boolaccion = true;
                //$scope fecha =$scope.user_tabla[j].getFullYear()+"-"+($scope.user_tabla[j].getMonth()+1)+"-"+$scope.user_tabla[j].getDate();
                $scope.fechas.push($scope.user_tabla[j]);

              }else if ($scope.boolaccion==true) {
                $scope.boolaccion = false;
                $scope.boolmonto = true;
                $scope.accions.push( $scope.user_tabla[j]);
              } else if($scope.boolmonto==true) {
                $scope.boolfecha = true;
                $scope.boolmonto = false;
                $scope.montos.push($scope.user_tabla[j]);
                $scope.debe=$scope.debe+$scope.user_tabla[j];
              }

            }

          }
        }
    }

      $scope.Postusuario = function(){
        console.log($scope.user + " soy frontend controller");
        usuarioService.Postusuario($scope.user).then(function(response){
          swal("¡Exito!","success");
          $scope.getusuario();
        }).catch(function(err){
          swal("Error", "Error ingresado el usuario", "error");
        });
      }

      //Para El Fondo
      $scope.viewBackground = "background-usuario";

      function setHeight() {
        windowHeight = $(window).innerHeight();
        $('#body_facturacion').css('min-height', windowHeight);
      };
      setHeight();

      $(window).resize(function() {
        setHeight();
      });
  }]);
