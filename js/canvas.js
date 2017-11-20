'use strict';

 // CANVAS s'ouvre lors de l'evenement "click bouton réserver"

// creation de l'objet canvas
var canvas = {
    
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    
    // méthode DRAW qui se déclenche lors de l'evenement "click MOUSEDOWN"
    draw : function() {
    
//        ctx.fillStyle = 'black';
//        ctx.lineJoin = "round";
//        ctx.lineWidth = 3;
    
}


    // 3 méthodes correspondant aux 3 boutons/actions
	clear : function() {
//            ctx.clearRect(0,0,750,300);
            }

	
	confirm : function() {
    
            }

	
	cancel : function() {
        
            }

	}



// WHILE mousedown => draw()
//	if mouseup => popup CONFIRMER 

// RECUPERER LES DONNEES  clientX(horizontales) et clientY(verticales) 



//————————————
//
//function Signature() {
//    var myCanvas = document.getElementById("canvas");
//    var ctx = myCanvas.getContext("2d");
//    var clickX = [];
//    var clickY = [];
//    var clickDrag = [];
//
//    this.redraw = function () {
//        ctx.strokeStyle = “black”;
//        ctx.lineJoin = "round";
//        ctx.lineWidth = 3;
//	}
//}
//
//
//————————————




/*
REQUIREMENTS

- Signature dans champ libre html5 CANVAS
- When signed, bike booked
*/

/*----------------*/


/*
SYNOPSIS

-  USER CLIKED ON BOOKING YOUR VELIB, CANVAS CONTAINER APPEARS COL-MD-4(or 6)
-  MESSAGE "please put your name and sign"
-  WHEN USER SIGNED, 20MN CHRONO APPEARS AT THE BOTTOM OF THE PAGE

 LE CONTAINER SIGNATURE CONTIENT: 
   - FORMULAIRE NOM ET PRENOM
   - ZONE CANVAS
   - 3 BOUTONS: CONFIRMER, EFFACER, ANNULER  
   
*/

/*
PSEUDOCODE

$(#signing)."click" =>

 IF EMPTY CANVAS => CONFIRMER BUTTON GREYED (cannot click it)
 IF NAME OR FIRSTNAME NOT MENTIONNED => message "please put your name"
 IF SIGNED => CAN CLICK CONFIRMER
 WHEN CONFIRMED => 


    - CANVAS CONTAINER DISAPPEAR, ONLY CANVAS ZONE KEPT IN BOOKING STATUS ZONE BOTTOM RIGHT 
        supprime col-sm-8 et remplace par col-sm-12 (donc width 100% pour la map)
    - BOOKING STATUS ZONE APPEAR MESSAGE BOOKING + CHRONO
*/


/*
- répondre au clic de l’utilisateur - coord X et Y => boucle : jusqu’à la fin du MOUSEUP…   ???
*/
/*


EFFACER SIGNATURE
ctx.clearRect(0,0,750,300);
*/



