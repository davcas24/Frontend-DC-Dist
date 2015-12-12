var highcharts = angular.module('highcharts', ["highcharts-ng"]);

angular.module('AngularScaffold.Controllers')
  .controller('chartsController', ['$state','$scope', 'chartsService', 'indexService', function ($state,$scope, chartsService, indexService) {
    indexService.setTitle("Graficos");

  //$scope.factData = [];

  $scope.facturasArreglo = [];
  var myseries3 = [];
	$scope.loadFactura =  function(){
		chartsService.GetFactura($scope.facturasArreglo).then(function(response){
			$scope.facturasArreglo = response.data;
      
      /*for (var i = 0; i < $scope.facturasArreglo.length; i++) {
        console.log($scope.facturasArreglo[i]);
      }*/
      var currentDate = new Date();

      for (var k= 1; k < 13 ;k++) {
        var total_mensual = 0;
        for(var i = 0; i < $scope.facturasArreglo.length; i++){
            if(parseInt($scope.facturasArreglo[i].Anio) == parseInt(currentDate.getFullYear()) && parseInt($scope.facturasArreglo[i].Mes) == k){
                total_mensual+=parseInt($scope.facturasArreglo[i].total);
            }
        }
        myseries3.push([k,total_mensual]);
      }
      $(function () {
        $('#chart3').highcharts({
          chart: {
             type: 'bar'
         },
         title: {
             text: 'Ventas por Mes en ' + currentDate.getFullYear() + ' (Global)'
         },
         xAxis: {
           title: {
             text: "Dias"
           }
         },
         yAxis: {
             title: {
                 text: 'Cantidad (Lps.)'
             }
         },
         series: [{
            name: 'Ventas',
            data: myseries3
         }]
        });
      });
    }).catch(function(err){
			alert("Error, no hay facturas disponibles");
		});

	}

  window.onload = $scope.loadFactura();

  var stringzona = "";

  $("#dropZonas li a").click(function(){
    stringzona = ($(this).text());
    $("#zonabutt:first-child").text($(this).text());
    $("#zonabutt:first-child").val($(this).text());
    console.log(stringzona);
  });

  $scope.visualizar = function(){
    for (var i = 0; i < $scope.facturasArreglo.length; i++) {
      console.log($scope.facturasArreglo[i]);
    }
    var dateinit = document.getElementById("datedav1");
    var datefin = document.getElementById("datedav");
    var dateinitVal = new Date(dateinit.value);
    var datefinVal = new Date(datefin.value);
    if(dateinitVal > datefinVal || dateinit.value === datefin.value || datefin.value == "" || dateinit.value == ""){
      alert("Error, fechas mal ingresadas");
    }else{
      //alert("exito");
      var myseries = [];
      console.log($scope.facturasArreglo.length);
      for (var k = 1; k < 32; k++) {
        var promedioday = 0;
        for(var i = 0; i < $scope.facturasArreglo.length; i++){
          var datefromdb = new Date($scope.facturasArreglo[i].Anio + "-" + $scope.facturasArreglo[i].Mes + "-" + $scope.facturasArreglo[i].Dia);
          if(datefromdb >= dateinitVal && datefromdb <= datefinVal && stringzona === $scope.facturasArreglo[i].zona && parseInt($scope.facturasArreglo[i].Dia) == k){
            promedioday+=parseInt($scope.facturasArreglo[i].total);
          }
        }
        myseries.push([k,promedioday]);
      }

      $(function () {
        $('#chart1').highcharts({
          chart: {
             type: 'bar'
         },
         title: {
             text: 'Ventas por Dia en ' + stringzona
         },
         xAxis: {
           title: {
             text: "Dias"
           }
         },
         yAxis: {
             title: {
                 text: 'Cantidad (Lps.)'
             }
         },
         series: [{
            name: 'Ventas',
            data: myseries
         }]
        });
      });//end chart1

      var myseries2 = [];
      for(var i = 1; i < 13; i++){
        var promedio = 0;
        for (var j = 0; j < $scope.facturasArreglo.length; j++) {
          if(parseInt($scope.facturasArreglo[j].Mes) == i && parseInt($scope.facturasArreglo[j].Anio) == parseInt(dateinitVal.getFullYear()) && stringzona === $scope.facturasArreglo[j].zona){
            promedio+=parseInt($scope.facturasArreglo[j].total);
            console.log("promedio " + i + "---" +promedio + $scope.facturasArreglo[j].total);
          }
        }
        myseries2.push([i,promedio]);
      }
      for (var i = 0; i < myseries2.length; i++) {
        console.log(i+" "+myseries2[i]);
      }
      $(function () {
        $('#chart2').highcharts({
          chart: {
             type: 'bar'
         },
         title: {
             text: 'Ventas por Mes en ' + stringzona + ' en ' + dateinitVal.getFullYear()
         },
         xAxis: {
           title: {
             text: "Mes"
           }
         },
         yAxis: {
             title: {
                 text: 'Cantidad (Lps.)'
             }
         },
         series: [{
            name: 'Ventas',
            data: myseries2
         }]
        });
      });
    }//else
  }//end funcrion


  }]);
