"use strict";

window.addEventListener('load', function () {
    var map = L.map('mapid',{
    center: [41.3870, 2.1700], // coordinates Plaza Catalunya
    zoom: 8
    });
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);
    
    // // Select map section

    var bounds = [ [41.3870, 2.1700], [41.3872, 2.1706] ];
    map.fitBounds( bounds );
    
    // Resize map when resizing

    map.on("resize", function(e){
        map.fitBounds( bounds );
    });
    
    // Set marker
    var marker =  L.marker([41.3868561, 2.1661102]).addTo(map); // Carrer de Balmes 16

    // Set popup when clicked on marker
    var popup = L.popup();
    marker.on('click', function (){
        marker.bindPopup("<b>Sitio XY</b><br>Carrer de Balmes, 16, 08007 Barcelona.").openPopup();
    }); 
    
},
    false);

   