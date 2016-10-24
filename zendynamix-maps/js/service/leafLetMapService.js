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

    //clears all the  layers on the map provides brand new map container
    function clearAndInstantiateMap(name,lat, lng,zoomLevel) {
        if (mymap != undefined)
        {
            mymap.remove();
            initLeafLetMap(lat, lng, name ,zoomLevel)
        }


    }

    function setCenterLocationOfMap(lat, lng, zoomLevel) {
        mymap.setView([lat, lng], zoomLevel)
    }

    function drawPolyLineFromArrayOFLatLanObjects(arrayOfLatLngObjects,color){
        var directionObjArray=[]
        for(var j=0;j<arrayOfLatLngObjects.length;j++){
            var tempArr=new Array();
            tempArr.push(parseFloat(arrayOfLatLngObjects[j].lat))
            tempArr.push(parseFloat(arrayOfLatLngObjects[j].lng))
            directionObjArray.push(tempArr)

        }
        drawPolyline(directionObjArray,color)
    }



    function drawPolyline(polyLinePoints,color){

        var polyline = L.polyline(polyLinePoints, {color: color}).addTo(mymap);
        // zoom the map to the polyline
        mymap.fitBounds(polyline.getBounds());

    }


    return {
        initMap: initLeafLetMap,
        addCustomMarkers:addCustomMarkers,
        drawPolygon:drawPolygon,
        clearAndInstantiateMap:clearAndInstantiateMap,
        setCenterLocationOfMap:setCenterLocationOfMap,
        drawPolyline:drawPolyline,
        drawPolyLineFromArrayOFLatLanObjects:drawPolyLineFromArrayOFLatLanObjects
    }
})
