/**
 * Created by dhanalakshmi on 22/10/16.
 */

zendynamixMap.factory('leafLetMapService', function () {
    var mymap,marker,animatedHistoryMarker;


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
        /*var marker= L.marker([lat,lng], {icon: markerIconStyle}).addTo(mymap);
        marker._leaflet_id = markerId;*/
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



    function fromPloylineArray(arrayOfLatLngObjects){
        var directionObjArray=[]
        for(var j=0;j<arrayOfLatLngObjects.length;j++){
            var tempArr=new Array();
            tempArr.push(parseFloat(arrayOfLatLngObjects[j].lat))
            tempArr.push(parseFloat(arrayOfLatLngObjects[j].lng))
            directionObjArray.push(tempArr)

        }
        return directionObjArray;
    }

    function drawPolyline(arrayOfLatLngObjects,color){
        var polyLinePoints=  fromPloylineArray(arrayOfLatLngObjects)
        var polyline = L.polyline(polyLinePoints, {color: color}).addTo(mymap);
        // zoom the map to the polyline
        /*mymap.fitBounds(polyline.getBounds());*/


    }


    function startRealTimeMarkerMoving(arrayOfLatLngObjects){
        var polyLinePoints=  fromPloylineArray(arrayOfLatLngObjects)

        if(animatedHistoryMarker){
            mymap.removeLayer(animatedHistoryMarker);
        }

        var line = L.polyline(polyLinePoints)
        var myIcon = L.icon({
            iconUrl: 'directives/js/images/square-xxl.jpg',
            iconSize: [15, 15]
        });

        animatedHistoryMarker = L.animatedMarker(line.getLatLngs(), {
            icon: myIcon,
            interval: 10000//milliseconds
        });
        animatedHistoryMarker.start();
        mymap.addLayer(animatedHistoryMarker);


    }


    function panAndZoomLocation(lat,lng, deviceId){
        updateMarkers(lat,lng,deviceId,false);
    }
    function updateMarkers(lat, lng, markerId,isMoveTo) {
        if(isMoveTo === null ||isMoveTo === undefined) {
            isMoveTo =true;
        }

        for(var k=0;k<markerhasTabel.length;k++){
            if(markerhasTabel[k].key===markerId){
                var newLatLng = new L.LatLng(lat,lng);
                var latlng = L.latLng(lat, lng);

                mymap.setView(latlng);
                mymap.panTo(latlng, {animate: true, duration: 10.0});

                if(isMoveTo){
                    markerhasTabel[k].value.moveTo(latlng, 10000)
                }else{
                    markerhasTabel[k].value.moveTo(latlng,5);
                    // markerhasTabel[k].value.setLatLng(latlng).update()
                }



            }

        }

    }





    return {
        initMap: initLeafLetMap,
        addCustomMarkers:addCustomMarkers,
        drawPolygon:drawPolygon,
        clearAndInstantiateMap:clearAndInstantiateMap,
        setCenterLocationOfMap:setCenterLocationOfMap,
        drawPolyline:drawPolyline,
        startRealTimeMarkerMoving:startRealTimeMarkerMoving
    }
})
