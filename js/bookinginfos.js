// CREATION DE L'OBJET COUNTER POUR LE COMPTEUR DE LA RESERVATION

var Counter = function() {
    this.time = delay; //TEMPS ENTRE CHAQUE SLIDE
    this.slides = document.querySelector('#slides');
    this.currentSlide = 0;
};







/*
// REQUIREMENTS

- Localisation et status de chaque station fourni par API OPEN DATA PARIS
- Données : statut(ouvert/fermé), nom station, adresse station, nbre de vélos, vélos disponibles
*/
//
//var bookInfos = {
//
//	// méthode booking
//	book : function() {
//	
//	}
//}




/*------------*/


// SYNOPSIS


// QUAND IL Y A RESERVATION : message "réservation station..."



//MENU AIDE “?” (coin haut droit) : propose menu avec option menant au slide explicatif  ex: menu/réserver Vélib => slide “Réserver votre Velib”
	



// BOOKING INFORMATIONS
/*
<!————— STATION INFORMATION


var marker {
	this.name
	this.adresse
	this.velDispo
	this.velRestant
	this.status
}

*/

/*

RECUPERATION DES DONNEES JSON (avec fonction JSON.parse)

ajaxGet("http://../name.json", function (reponse) {
    // Transforme la réponse en tableau d'objets JavaScript
        var markers = JSON.parse(reponse);
    // Affiche les infos de chaque marker
        markers.forEach(function (marker) {
        console.log(marker.name, marker.address, etc);
    })
});

*/

// BOOKING STATUS

//var bookStatus = {
//
//// METHODE POUR ANNULER LA RESERVATION (click button)
//	cancel = function() {
//		event listener #button 
//	}
//
//	}


// EXERCICE AFFICHAGE DE L’HEURE SUIVANTE

var heures = Number(prompt("Entrez les heures :")); var minutes = Number(prompt("Entrez les minutes :")); var secondes = Number(prompt("Entrez les secondes :"));