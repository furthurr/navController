# navController
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
