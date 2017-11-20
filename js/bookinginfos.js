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

var heures = Number(prompt("Entrez les heures :")); var minutes = Number(prompt("Entrez les minutes :")); var secondes = Number(prompt("Entrez les secondes :"));// On teste tous les cas d'erreurif ((heures >= 0) && (heures <= 23) && (minutes >= 0) && (minutes <= 59) && (secondes >= 0) && (secondes <= 59)) {secondes++; // On incrémente les secondesif (secondes === 60) {// Il faut mettre les secondes à 0 et passer à la minute suivantesecondes = 0; minutes++;if (minutes === 60) {// Il faut mettre les minutes à 0 et passer à l'heure suivanteminutes = 0;heures++;if (heures === 24) { // L'heure suivante est minuitheures = 0; }} }console.log("Dans une seconde, il sera " + heures + " heures, " + minutes + " minutes et " + secondes + " secondes");}else{console.log("Heure incorrecte !");}