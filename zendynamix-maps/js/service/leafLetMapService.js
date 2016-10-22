/**
 * Created by dhanalakshmi on 22/10/16.
 */

zendynamixMap.factory('leafLetMapService', function () {
    var mymap;


    function initLeafLetMap(lat, lng, name ,zoomLevel) {
        console.log("inside service")
        mymap = L.map(name).setView([lat, lng], zoomLevel);
        /*types of map Aerial Road*/
        var tileLayer = new L.BingLayer("AuhiCJHlGzhg93IqUH_oCpl_-ZUrIE6SPftlyGYUvr9Amx5nzA-WqGcPquyFZl4L", {type: 'AerialWithLabels'});
        mymap.addLayer(tileLayer);


    }

    return {
        initMap: initLeafLetMap
    }
})
