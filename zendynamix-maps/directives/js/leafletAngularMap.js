/**
 * Created by dhanalakshmi on 22/10/16.
 */


zendynamixMap.directive("zendynamixMaps", function(leafLetMapService,$timeout) {
    return {
        restrict: 'E',
        template: "<div class='map' id='{{mapId}}'> </div>",

        link: function(scope, element, attrs){

            console.log("**************************************scope.mapId")
            console.log(scope.mapId)
            $timeout(function () {
                leafLetMapService.initMap(25.248354, 55.352544,scope.mapId);
            },500)
        },
        scope:{
            mapId: '@'
        }
    }
});

