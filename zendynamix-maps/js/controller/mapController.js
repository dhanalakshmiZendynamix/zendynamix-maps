
/**
 * Created by dhanalakshmi on 22/10/16.
 */
zendynamixMap.controller('mapController', function ($scope,leafLetMapService) {


    function marker(){
        leafLetMapService. addCustomMarkers(25.245554,55.344544);
    }
    function init(){
        setTimeout(function(){
            leafLetMapService. addCustomMarkers(25.245554,55.344544);

        }, 3000);

    }


    init();


})
