'use strict';

var slider = function(delay) {
    this.time = delay; //TEMPS ENTRE CHAQUE SLIDE
    this.slides = document.querySelector('#slides');
    this.currentSlide = 0;
};

slider.prototype.next = function() {
	this.slides.children[this.currentSlide].classList.remove('active');
    this.currentSlide++;
    if (this.currentSlide == this.slides.children.length) {
        this.currentSlide = 0; 
    }
	this.slides.children[this.currentSlide].classList.add('active');
	
}
slider.prototype.previous = function() {
	// TODO: make previous
    this.slides.children[this.currentSlide].classList.remove('active');
    this.currentSlide--;
	this.slides.children[this.currentSlide].classList.add('active');
	
}

slider.prototype.autoPlay = function() {
	var self = this;
	setInterval(function(){
		self.next();
	}, 5000);
}

var monSlider = new slider(8000);
monSlider.autoPlay();


// TO DO : 

// function previous


//CREATION DE L'evenement rightArrow  => onclick => slider.prototype.previous
//                        leftArrow  => onclick => slider.prototype.next

//CREATION DE L'evenement e.keycode 37 => keypress => slider.prototype.previous
//                        e.keycode 39 => keypress => slider.prototype.next

//  ILLUSTRATIONS
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// //CREATION PROTOTYPE DES FLECHES
// //	var Arrow = {
// //		init: function() {
// //
// //			}
// //        // CREATION DES METHODES image précédente/image suivante
// //        nextImg : function() {
// //
// //		}
// //		previousImg : function() {
// //
// //		}
// //	}
// //
// //var leftArrow = Object.create(Arrow);
// //leftArrow.init(params);
// //var rightArrow = Object.create(Arrow);
// //rightArrow.init(params);
//
//
// //var slider = {
// //    var i = 0;
// //    var images = [];
// //
// //    //TEMPS ENTRE CHAQUE SLIDE
// //    this.time = 8000;
// //    this.images = [images[0] = 'images/slide1.png',
// //                   images[1] = 'images/slide2.png',
// //                   images[2] = 'images/slide3.png',
// //                   images[3] = 'images/slide4.png',
// //                   images[4] = 'images/slide5.png',],
// //    changeImg : function() {
// //        document.slide.src = images[i];
// //            if(i < images.length - 1) {
// //                i++;
// //                } else {
// //                i = 0;
// //                }
// //        setTimeout("changeImg()", time);
// //    },
// //    //chargement du slider au démarrage de la fenêtre
// //
// //    window.onload = changeImg;
// //};
//
//
//
// // A FAIRE :
//
// //1) METTRE EN OBJET
// //2) créer événement keypress pour les flèches
// //3) créer images
//
// //variables
//
// //var i = 0;
// //var images = [];
// //
// ////TEMPS ENTRE CHAQUE SLIDE
// //var time = 8000;
//
// //tableau des images
//
// //images[0] = 'images/slide1.png';
// //images[1] = 'images/slide2.png';
// //images[2] = 'images/slide3.png';
// //images[3] = 'images/slide4.png';
// //images[4] = 'images/slide5.png';
//
// //function changeImg() {
// //    document.slide.src = images[i];
// //    if(i < images.length - 1) {
// //        i++;
// //    } else {
// //        i = 0;
// //    }
// //    setTimeout("changeImg()", time);
// //}
// ////chargement du slider au démarrage de la fenêtre
// //
// //window.onload = changeImg;
//
// //    GESTION DES TOUCHES PREVIOUS ET NEXT
// //    switch(e.key.code){
// //        case 37:
// //            active la touche previous
// //            break;
// //        case 39:
// //            active la touche next
// //            break;
// //    }
//
// /*
// REQUIREMENTS
//
// - DIAPORAMA DE PHOTOS ET TEXTES POUR FONCTIONNEMENT DE L'APP
// - Réagit au clavier touches gauche et droite
//
// */
//
// /*----------*/
//
// //  SYNOPSIS
//
//
// /*
//
//     CLASS : SLIDE => OBJECTS : slide1, slide2, slide3, slide4, slide5
//     CLASS : ARROW => OBJECTS : rightArrow, leftArrow
//
// */
//
// /*
// KEYPRESS type : utiliser syntaxe jQuery
// ARROW EVENT : utiliser méthode String.fromCharCode(e.charCode)
//     IF ((String.fromCharCode(e.charCode)) === key39) => image suivante
//     ELSE IF ((String.fromCharCode(e.charCode)) === key37) => image précédente
// */
//
//
// /*
// var velibSlider;
// var slideArray = [slide1, slide2, slide3, slide4, slide5] ;
// var currentSlide;
// */
// // PASSAGE IMAGES
//
// // PASSAGE IMAGE SUIVANTE :
// // 	IF : - click sur slide
// //	     - si CLIC/keydown sur touche 39 => : affichage image3
// // PASSAGE IMAGE PRECEDENTE :
// // 	IF : - si CLIC/keydown sur touche 37 <= : affichage image1
//
//
// // Comportement TOUCH pour passage des images ???
//
//
// // avancement flèche gauche ou droite : document.keypress
// /*
//
// <!————— SI SLIDER DEFILEMENT AUTOMATIQUE
//
// - utiliser setInterval (avec function diminuerCompteur (genre 10 sec)) ??
// - gérer la première image au (re)démarrage de la page
// - si the user clique sur flèche gauche/droite :
// 	// Annule l'exécution répétée
// 	clearInterval(intervalId);
//
// CLIC flèche droite et gauche:
//
// function infosClavier(e) {
//     console.log("Evenement clavier " + e.type + ", touche : " + e.keyCode);
// }
//
// document.addEventListener("keydown", infosClavier);
// //document.addEventListener("keyup", infosClavier);
//
// - créer event :
// ex:
// si CLIC/keydown sur touche 39 => : affichage image3
// si CLIC/keydown sur touche 37 <= : affichage image1
//
// méthode NEXT => CONDITIONS LEFT 100% SLIDE en jQUERY
//
//
// CSS
// overflow: hidden;
//
//
// */
//
// var slider = {
//     var images = [images[0] = 'images/slide1.png',
//                    images[1] = 'images/slide2.png',
//                    images[2] = 'images/slide3.png',
//                    images[3] = 'images/slide4.png',
//                    images[4] = 'images/slide5.png',],
//     var showCanvas = null;
//     var showCanvasCtx = null;
//     var img = document.create.element("img");
//     var currentImage = 0;
//
//     loadCanvas : function() {
//         window.onload = function(){
//             var showCanvas = document.getElementById("canvas");
//             var showCanvasCtx = showCanvas.getContext('2d');
//
//             img.setAttribute('width', '500');
//             img.setAttribute('heigth', '400');
//             changeImage();
//
//             //ANIMATION
//             setInterval(changeImage, 8000);
//
//             changeImage : function() {
//                 img.setAttribute('src', images[currentImage++]);
//                 img.onload = function() {
//                     if (currentImage >= images.length)
//                         currentImage = 0;
//                     showCanvasCtx.drawImage(img,0,0,500,400);
//                     }
//                 }
//             }
//         }
// }
