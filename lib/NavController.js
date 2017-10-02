//
//  NavController.js
//  @furthurr
//
//  Created by Pedro Gomez Vasquez on 2014-01-16.
//  Copyright 2014 furthurr. All rights reserved.
//
//##### libreria para manejar un arreglo de ventanas tanto en iOS como en Android con con allow
//##### colocar el archivo en /lib/NavController.js
//##### para poder utilizarla es necesario crear una variable global :
//######################################################################
//#####    var NavigationController = require('NavController');
//#####    var navController = new NavigationController();
//#####    Alloy.Globals.navcontroller = navController;
//#####    var testwin = Alloy.createController('ventana').getView();
//#####		 Alloy.Globals.navcontroller.open(testwin); //<-creando una ventana
//######################################################################
//##### la libreria maneja 3 metodos el primero es "open" este metodo es para mandan a crear o agregar una nueva ventana
//######################################################################
//#####    Alloy.Globals.navcontroller.open(testwin); <--- agregar una nueva ventala a la pila de ventanas
//######################################################################
//##### para cerrar una sola ventana:
//######################################################################
//#####    Alloy.Globals.navcontroller.close1();
//######################################################################
//##### para cerrar todas las ventanas y poder ir a home o la primera
//##### 								ventana (ventana root):
//######################################################################
//##### Alloy.Globals.navcontroller.home();
//##### Alloy.Globals.navcontroller.home1(); //cierra ventanas de manera inversa
//######################################################################
//######################################################################
//##### para cerrar solo la penultima ventana
//######################################################################
//#####    Alloy.Globals.navcontroller.closePenultima();
//######################################################################
function NavController() {this.ventanas = [];};
NavController.prototype.open = function(newWin){
	 this.ventanas.push(newWin);
	  newWin.orientationModes =[Titanium.UI.PORTRAIT];
		if (this.ventanas.length === 1) {
		if (Ti.Platform.osname === 'android') {
			newWin.exitOnClose = true;
			newWin.open();
		} else {
			this.navGroup = Ti.UI.iOS.createNavigationWindow({swipeToClose:true,window : newWin,});//this.navGroup.setSwipeToClose(false);
			this.navGroup.open();
		}
	}
	else {
		if (Ti.Platform.osname === 'android') {
			newWin.open();
		} else {
			this.navGroup.openWindow(newWin,{swipeToClose:false});
		}
	}
};
NavController.prototype.close1 = function(){// cierra la ultima ventana enviandonos a la penultima
	if (this.ventanas.length > 1){
		if (Ti.Platform.osname === 'android') {
			this.ventanas[this.ventanas.length - 1].close();
			 this.ventanas.pop();
		}
		else{
			this.navGroup.closeWindow(this.ventanas[this.ventanas.length - 1]);
			this.ventanas.pop();
		}
	}
	else {//alert('imposible cerrar la ventana root');
	}
};
NavController.prototype.home = function() {// nos envia a la primera pantalla (ventana root)
	if (this.ventanas.length > 1) {
		var animado = false;
		var ultimaVentana = this.ventanas.length;
		for (var i = 1; ultimaVentana > i; i++) {
			((ultimaVentana-1) === i)? animado = true : animado = false ;
			(Ti.Platform.osname === 'android')?this.ventanas[i].close():this.navGroup.closeWindow(this.ventanas[i],{animated : animado});
		};
		for (var i = 1; ultimaVentana > i; i++) {this.ventanas.pop();}
	} else {//alert('imposible cerrar todas las ventanas porque estas en root');
	}
};
NavController.prototype.home1 = function() {// nos envia a la primera pantalla (ventana root)
	if (this.ventanas.length > 1) {
		var animado = false;
		var ultimaVentana = this.ventanas.length;
		for (var i = 2; ultimaVentana > i; i++) {
			((ultimaVentana-1) === i)? animado = true : animado = false ;
			(Ti.Platform.osname === 'android')?this.ventanas[i].close():this.navGroup.closeWindow(this.ventanas[i],{animated : animado});
		};
		for (var i = 2; ultimaVentana > i; i++) {this.ventanas.pop();}
	} else {
		//alert('imposible cerrar todas las ventanas porque estas en root');
	}
};
NavController.prototype.closePenultima = function(){ // cierra la penultima ventana sin cerrar la ultima
	if (this.ventanas.length > 1){
		var temp= this.ventanas.length-2;
		if (Ti.Platform.osname === 'android') {
			this.ventanas[this.ventanas.length - 2].close({animated:false});
			 this.ventanas.splice( temp, 1 );
		}
		else{
			this.navGroup.closeWindow(this.ventanas[this.ventanas.length - 2]);
			this.ventanas.splice( temp, 1 );
		}
	}
	else {Ti.API.error('imposible cerrar todas las ventanas porque estas en root ');
	}
};
module.exports = NavController;
Ti.API.info('Loading libreria ');
