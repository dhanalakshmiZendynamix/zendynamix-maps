/**
 * Created by dhanalakshmi on 22/10/16.
 */


zendynamixMap.directive("zendynamixMaps", function(leafLetMapService,$timeout) {
    return {
        restrict: 'E',
        template: "<div class='map' id='{{mapId}}'> </div>",

        link: function(scope, element, attrs){
            console.log(scope.latitude)
            $timeout(function () {
                leafLetMapService.initMap(scope.latitude, scope.longitude,scope.mapId ,scope.zoom );
            },200)
        },
        scope:{
            mapId: '@',
            latitude:'@',
            longitude:'@',
            zoom:'@'
        }
    }
});

