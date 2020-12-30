"use strict";

window.addEventListener('load', function () {
    var map = L.map('mapid',{
    center: [41.3870, 2.1700], // coordinates Plaza Catalunya
    zoom: 13
    });
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

    // Select map section

    var bounds = [ [41.3870, 2.1700], [41.3872, 2.1706] ];
    map.fitBounds( bounds );
    
    // Resize map when resizing

    map.on("resize", function(e){
        map.fitBounds( bounds );
    });

    var popup = L.popup();
    
    // Set & personalize markers

    // marker 
    var restaurant = L.icon({
        iconUrl: 'restaurant.png',
    
        iconSize:     [110, 95], // size of the icon
        iconAnchor:   [26, 94], // point of the icon which will correspond to marker's location
        popupAnchor:  [-3, -80] // point from which the popup should open relative to the iconAnchor
    });

    var marker1 =  L.marker([41.3868561, 2.1661102], {icon: restaurant}).addTo(map).bindPopup("Let´s have lunch here!");
    marker1.on('click', function (){
        marker.bindPopup("<b>Sitio XY</b><br>Carrer de Balmes, 16, 08007 Barcelona.").openPopup();
    }); 
    
    
   // popup with coordinates & zoom in
   
   function onMapClick(e) {
    var lat = e.latlng.lat;
    var lng = e.latlng.lng;
    map.fitBounds([e.latlng]); 
    
    popup
        .setLatLng(e.latlng)
        .setContent("<img src='wavinghand.gif' alt='gif' width='280px height= '500px'/></br> <p class= 'popup'>You are here:</br><br/>Lat: " + lat +" Lng: " + lng)
        .openOn(map); 

};
map.on('click',onMapClick); 

    
    // // Select map section

    // var bounds = [ [41.3650, 2.2000], [41.3872, 2.1506] ];
    // map.fitBounds( bounds );

    
    
    
},
    false);
