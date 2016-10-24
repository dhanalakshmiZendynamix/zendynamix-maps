
/**
 * Created by dhanalakshmi on 22/10/16.
 */
zendynamixMap.controller('mapController', function ($scope,leafLetMapService) {


    function init(){
        setTimeout(function(){
            var polyarray1=[
                [ 25.277132 ,55.418959],
                [ 25.280014 ,55.416475],
                [ 25.279028 , 55.419552],
                [ 25.276895 , 55.420213],
                [  25.276277 , 55.419949]

            ]

            leafLetMapService.addCustomMarkers(25.277132 ,55.418959,'directives/js/images/square-xxl.jpg',20,20);
            leafLetMapService.drawPolygon(polyarray1,'red','green',0.3)
            leafLetMapService.clearAndInstantiateMap("dashBoardMap",25.248354,55.352544,18)

        }, 3000);

    }


    init();


})
