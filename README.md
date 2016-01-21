#Alkalmazások fejlesztése harmadik beadandó
##2016.01.17.

###Követelményanalízis

Elvárások:
Egy webes vastagkliens, azaz egyoldalas alkalmazás készítése Ember.js segítségével az utolsó beadandó. Feladatot illetően lehet a szerveroldali alkalmazásnak egy kliensoldali változata, de másik feladat is választható. A feladatnak mininálisan tartalmaznia kell:

* REST API végpont kialakítása
* legalább két modellt (onetomany)
* legalább 1 űrlap
* legalább 1 listázó oldal
* új felvétele
* adatbázisban lévő szerkesztése
* adatbázisban lévő törlése
* szerveroldali perzisztálás fájlba

Használateseti-modell:
Fontos, hogy a RESTAPI-t elindítsuk, hiszen ha nem tesszük nem tudunk új elemet felvenni az adatbázisba, illetve a régiek sem érhetőek el.
Adatbázis elemei: Hozzáadva, Kategória, Rövid ismertető

###Képek a programból



###Futattás
* c9: 2 project elindítása
* server elindítása ezzel a paranccsal: "./node_modules/ember-cli/bin/ember server"
* bead3 futtatása
* navigálás kedv szerint

###Végpontok
* Homepage: http://bead3-tomcarver95.c9users.io
* Ételek: http://bead3-tomcarver95.c9users.io/errors/list
* Új étel felvétele: http://bead3-tomcarver95.c9users.io/errors/new
* Megnéz: http://bead3-tomcarver95.c9users.io/errors


###Felhasználói dokumentáció
Az alkalmazás futtatásához csupán egy böngészőre van szükség. (pl: Mozilla Firefox, Google Chrome...) Az oldalon található két gomb, "étel" és "új étel felvétele". Ha az elsőre kattintunk megjelenik az adatbázisba már felvett ételek listája.
Ha a másik gombra kattintuk akkor értelemszerűen egy új ételt tudunk felvenni, amit később törölni, megtekinteni részletesebben illetve módosítani (szerkeszteni) is tudunk. Ezeket a műveleteket az "ételek" gombon találjuk.

###Mappaszerkezet

* README.md
* app/
* bower.json
* bower_components/
* config/
* dist/
* ember-cli-build.js
* node_modules/
* package.json
* public/
* testem.json
* tests/
* tmp/
* vendor/

