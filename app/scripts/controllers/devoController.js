angular.module('AngularScaffold.Controllers')
  .controller('devoController', ['$state','$scope', 'devoService', 'indexService','usuarioService',
  function ($state,$scope, devoService, indexService,usuarioService) {
  	indexService.setTitle("Devoluciones");
    $scope.users=[];
    $scope.users2=[];
    $scope.users3=[];
    $scope.user={};
    $scope.user_change={};
    $scope.user2={};
    $scope.boolclien = false;


      $scope.goadmin = function(){
        $state.go('admin');
        }

        $scope.getusuario = function(){
          usuarioService.Getusuario().then(function(response){
            $scope.users = response.data;
            console.log($scope.users);
            for (var i = 0; i < $scope.users.length; i++) {
                $scope.boolclien = $scope.users[i].scope.indexOf('Cliente') > -1;
                console.log($scope.users[i].scope.indexOf('Cliente') > -1);
                if($scope.boolclien){
                    $scope.users2.push($scope.users[i]);
                  console.log($scope.users2);
                }
            }

          }).catch(function(err){
            swal(err.data.error + " " + err.data.message,"error");
          });
        }

        $scope.getusuario();


        $scope.change=function(){
            if ($scope.user2 == "") {
              $scope.fecha="";
              $scope.accion="";
              $scope.cant="";
            }
          }

        $scope.guardar=function(){
        usuarioService.Getusuario().then(function(response){
            $scope.fecha1 = new Date();
            for (var i = 0; i < $scope.users.length; i++) {
              if ($scope.users[i].nombre== $scope.user2) {
                $scope.users[i].tabla.push($scope.fecha1);
                $scope.users[i].tabla.push("Devolucion en factura # " + $scope.accion);
                $scope.cant=$scope.cant*-1;
                $scope.users[i].tabla.push($scope.cant);
                console.log($scope.users[i].tabla+"llege zorritas");
                $scope.user_change=$scope.users[i];
              }
            }
            swal("Devolucione en factura # " + $scope.accion,"error");
            $scope.fecha="";
            $scope.accion="";
            $scope.cant="";
            usuarioService.Putusuarios($scope.user_change).then(function(response){
              swal("¡Exito!","success");
            }).catch(function(err){
            //  alert(err.data.error + " " + err.data.message)
            });
        }).catch(function(err){
        //  alert(err.data.error + " " + err.data.message)
        });
      }


  }]);
