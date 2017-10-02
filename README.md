# NavController
[@furthurr](https://twitter.com/furthurr?) 

Created by Pedro Gomez Vasquez on 2014-01-16.
Copyright 2014 furthurr. All rights reserved.

[![N|Solid](https://www.dallasisd.org/cms/lib/TX01001475/Centricity/Domain/12177/Blogger-icon.png)](http://ti-sl.blogspot.mx/) [![N|Solid](https://www.erccomics.com/images/youtube-icon.png)](https://www.youtube.com/user/myfurthur/videos)  [![N|Solid](https://www.gstatic.com/images/branding/product/1x/gmail_64dp.png)](mailto:pedrogvas@gmail.com)

Librería para manejar un arreglo de ventanas tanto en iOS como en Android con con allow
colocar el archivo en /lib/NavController.js

# Instalar:
Para utilizar recomiendo que elimines tanto tu index.xml y index.tss dejando solo el index.js
con el siguiente codigo:
```sh
var NavigationController = require('NavController');
var navController = new NavigationController();
Alloy.Globals.navcontroller = navController;
var testwin = Alloy.createController('ventana').getView();
Alloy.Globals.navcontroller.open(testwin); //<-creando una ventana
```

Agregar una nueva ventala a la pila de ventanas:
```sh
Alloy.Globals.navcontroller.open(testwin);
```

Cerrar una sola ventana:
```sh
Alloy.Globals.navcontroller.close1();
```

Cerrar todas las ventanas y poder ir a home o la primera ventana (ventana root):
```sh
Alloy.Globals.navcontroller.home();
Alloy.Globals.navcontroller.home1(); //cierra ventanas de manera inversa
```

Cerrar solo la penultima ventana:
```sh
Alloy.Globals.navcontroller.closePenultima();
```
