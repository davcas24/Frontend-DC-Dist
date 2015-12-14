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
    $scope.fecha=Date;
    $scope.accion=String;
    $scope.monto=Number;
    $scope.debe=Number;

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
        if ($scope.user2=="Seleccione usuario") {
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
            for (var i = 0; i < $scope.user_tabla.length; i++) {
              if ($scope.boolfecha==true) {
                $scope.boolfecha = false;
                $scope.boolaccion = true;
                $scope.fechas.push( $scope.user_tabla[i]);

              }else if ($scope.boolaccion==true) {
                $scope.boolaccion = false;
                $scope.boolmonto = true;
                $scope.accions.push( $scope.user_tabla[i]);
              } else if($scope.boolmonto==true) {
                $scope.boolfecha = true;
                $scope.boolmonto = false;
                $scope.montos.push($scope.user_tabla[i]);
                $scope.debe=$scope.debe+$scope.user_tabla[i];
              }

            }

          }
        }
    }

      $scope.Postusuario = function(){
        console.log($scope.user + " soy frontend controller");
        usuarioService.Postusuario($scope.user).then(function(response){
          alert("Posted to /usuario");
          $scope.getusuario();
        }).catch(function(err){
          alert("Error posting to usuario");
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
