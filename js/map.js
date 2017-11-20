'use strict';


var markers = [];
var apiVelib = "https://api.jcdecaux.com/vls/v1/stations?contract=Paris&apiKey=62073bbb6b17dfb407a2d0f085ee519f01305263";

function initMap() {
        var velibParis = {lat: 48.8566, lng: 2.3522};
        var map = new google.maps.Map(document.getElementById('map'), {
          'zoom': 12,
          'center': velibParis,
        });

        var marker = new google.maps.Marker({
          'position': velibParis,
          'animation': google.maps.Animation.DROP,
          'map': map
        });
//        var contentString = "Hello !";
//        var infowindow = new google.maps.InfoWindow({
//        content: contentString
//        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
        var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
        //         Création d'une requête HTTP
//        var velibElt = document.getElementById("velib");
        ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Paris&apiKey=62073bbb6b17dfb407a2d0f085ee519f01305263", function (reponse) {
            // Transforme la réponse en une liste des infos de la station
        var records = JSON.parse(reponse);
        records.forEach(function (record) {
            var coords = record.position;
            var marker = new monMarker(map, coords);
						marker.init();
            markers.push(marker);
      });
    });

    }


// OBJET GOOGLE MAP
//var myGoogleMap = {
//    'map' : null,
//    'apiVelib' : null,
//    'markers' : [],     //tableau marqueurs
//
//    init : function() {
//        this.map = new google.maps.Map(document.getElementById('map'), {
//          'zoom': 13,
//          'center': {lat: 48.8566, lng: 2.3522}
//    });
//        this.apiVelib = "https://api.jcdecaux.com/vls/v1/stations?contract=Paris&apiKey=62073bbb6b17dfb407a2d0f085ee519f01305263",
//
//    };
//        // Création d'une requête HTTP
//        var velibElt = document.getElementById("velib");
//        ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Paris&apiKey=62073bbb6b17dfb407a2d0f085ee519f01305263", function (reponse) {
//    // Transforme la réponse en une liste des infos de la station
    //    var velib = JSON.parse(reponse);
    //    velib.records.forEach(function (records) {
    //        var coords = record.geometry.coordinates;
//            var marker = new google.maps.Marker({
//                position: { lat: coords[1], lng: coords[0] },
//                map: map,
//                title: "Plus d'infos"
//            });
    //        // Ajout des données de chaque station
    //        var stationName = document.createElement("p");
    //        stationName.textContent = "Station : " +  records.name;
    //        var stationAddress = document.createElement("p");
    //        stationAddress.textContent = "Adresse : " +  records.address;
    //        var stationStatus = document.createElement("p");
    //        stationStatus.textContent = records.status;
    //        var nbreVelib = document.createElement("p");
    //        nbreVelib.textContent = "Velib dans la station : " +  records.bike_stands;
    //        var velibDispo = document.createElement("p");
    //        velibDispo.textContent = "Velib disponibles : " + records.available_bikes;
    //        velibElt.appendChild(stationName);
    //        velibElt.appendChild(stationAddress);
    //        velibElt.appendChild(stationStatus);
    //        // IF ( STATIONSTATUS === CLOSED ) => STATIONSTATUS = Fermée   style.color = red
    //        // IF ( STATIONSTATUS === OPEN ) => STATIONSTATUS = Ouvert  style.color = green
    //        // IF STATION CLOSED => HIDE nbreVelib + velibDispo + Bouton Réserver  <= func hideVelDetails()
    //        velibElt.appendChild(nbreVelib);
    //        velibElt.appendChild(velibDispo);
//      });
//  });
//
//
//        }