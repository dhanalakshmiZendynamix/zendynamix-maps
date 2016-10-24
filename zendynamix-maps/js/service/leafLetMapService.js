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


    //add custom marker
    function addCustomMarkers(lat,lng,iconUrl,iconWidth,iconHeight) {
        var markerIconStyle = L.icon({
            iconUrl: iconUrl,
            iconSize: [iconWidth, iconHeight]
        });
        L.marker([lat,lng], {icon: markerIconStyle}).addTo(mymap);
    }


    //polygon with fill color and line
    function drawPolygon(polyArray,borderColor,fillColor,fillOpacity){
        var polygon = L.polygon(polyArray,{
            color: borderColor,
            fillColor: fillColor,
            fillOpacity:fillOpacity
        }).addTo(mymap);



    }


    function clearAndInstantiateMap(name,lat, lng,zoomLevel) {
        if (mymap != undefined)
        {
            mymap.remove();
            initLeafLetMap(lat, lng, name ,zoomLevel)
        }


    }


    return {
        initMap: initLeafLetMap,
        addCustomMarkers:addCustomMarkers,
        drawPolygon:drawPolygon,
        clearAndInstantiateMap:clearAndInstantiateMap
    }
})
