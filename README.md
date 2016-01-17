#Alkalmazások fejlesztése harmadik beadandó
##2016.01.17.

###Feladat bemutatása

Egy webes vastagkliens, azaz egyoldalas alkalmazás készítése Ember.js segítségével az utolsó beadandó. Feladatot illetően lehet a szerveroldali alkalmazásnak egy kliensoldali változata, de másik feladat is választható. A feladatnak mininálisan tartalmaznia kell:

REST API végpont kialakítása
legalább két modellt (onetomany)
legalább 1 űrlapot
legalább 1 listázó oldalt
új felvétele
adatbázisban lévő szerkesztése
adatbázisban lévő törlése
szerveroldali perzisztálás fájlba


###Futattás

Githubról le kell tölteni a projektet, majd a cloud9 ide segítsévégel elindítani (támogatja a rest-api-t és az ember.js-t).
Kettő workspacet létrehozunk egyet a szervernek egyet pedig a projectnek, elindítjuk a server.js-t, majd a projecten belül ./node_modules/.bin/ember serve paranccsal szolgáljuk ki.
A projectből a dist mappát kitéve el tudjuk indítani a projectet bármely szerverről.

###Adatmodell

Adatbázis elemei: Hozzáadva, Kategória, Rövid ismertető

###Végpontok

Homepage: http://bead3-tomcarver95.c9users.io
Ételek: http://bead3-tomcarver95.c9users.io/errors/list
Új étel felvétele: http://bead3-tomcarver95.c9users.io/errors/new
Megnéz: http://bead3-tomcarver95.c9users.io/errors


###Használati útmutató

A feladatok menüpont alatt érhetjük a meglévő feladatainkat, illetve vehetünk fel újakat. A megtekint gombbal tekinthetjük meg az adott feladatot, és a töröl gombbal törölhetjük is azt.

Új feladat felvétele: A megnevezést egy legördülő menü segítségével választhatjuk ki. A nevet és az időpontot is meg kell adnunk.
Megtekint: Az adott feladatról egy részletes leírást kapunk.
Töröl: A töröl gombbal tudjuk törölni a feladatot.

###Szerepkörök

Egyetlen szerepkör van, mégpedig a látogató ő hozzá fér mindenhez.

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





