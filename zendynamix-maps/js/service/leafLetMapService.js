/**
 * Created by dhanalakshmi on 22/10/16.
 */

zendynamixMap.factory('leafLetMapService', function () {
    var mymap,marker;


    function initLeafLetMap(lat, lng, name ,zoomLevel) {
        console.log("inside service")
        mymap = L.map(name).setView([lat, lng], zoomLevel);
        /*types of map Aerial Road*/
        var tileLayer = new L.BingLayer("AuhiCJHlGzhg93IqUH_oCpl_-ZUrIE6SPftlyGYUvr9Amx5nzA-WqGcPquyFZl4L", {type: 'AerialWithLabels'});
        mymap.addLayer(tileLayer);

    }



    function addCustomMarkers(lat,lng) {

        var markerIconStyle = L.icon({
            iconUrl: 'directives/js/images/square-xxl.jpg',
            iconSize: [20, 20]
        });
        L.marker([lat,lng], {icon: markerIconStyle}).addTo(mymap);
    }

    return {
        initMap: initLeafLetMap,
        addCustomMarkers:addCustomMarkers
    }
})
