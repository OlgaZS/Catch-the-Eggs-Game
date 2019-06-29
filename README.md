# Project's name

## Description

Existe el jugador, y varias gallinas en el el techo/cielo.
las gallinas ponen huevos (callendo abajo), tambien pueden hacer kaka.
El jugador tiene que recojer los huevos moviendose a la derecha y a la inquierda y esquivar las kakas.
los huevos salen aleatiriamente, empiezan de 1 gallina y luego del resto aumentando la velocidad.
Sumas puntos al recoger los huevos y gameOver al recibir kaka
3 huevos rotos = gameOver

## MVP (DOM - CANVAS)

MVP definition, deliverables:
se puede mover un box-jugador (a la derecha a la izquierda).
otros boxes-gallinas estan fijos arriba. de alli salen boxes-objetos.
si consigues mover box-jugador para collisionar con box-objeto - sumas puntos

## Backlog

Deseable:

1.  si box-objeto toca el suelo sumas errores. 3 errores = gameOver;
2.  si collicionas con box-objeto es kaka = player Dead = gameOver;
3.  aparece otro objeto-box que tira premios, coger premio = borrar errores acumulados;
4.  si la llena la cesta (10) no puedes recoger mas huevos y tienes que vaciar la cesta.

## Data structure

Classes and methods definition.

1. Clase Game:
   -propiedades:
   estado: jugando, pausa,
   -metodos:
   --start(),
   --win(),
   --gameOver(),
   --crear campo de juego(),
   --crear el jugador(),
   --hacer gallina lanzarObjeto()

2) Clase Jugador:
   -propiedades: cesta(iniciamos con = 0),positionX, positionY
   -metodos: counter cesta ()

3) Clase Gallina:
   -propiedades: positionX, positionY
   -metodos: lanzarObjeto()

4. Clase Objeto callendo (huevo o kaka o premio):
   -propiedades: positionX, positionY, puntos (iniciamos igual = 1)
   -metodos: lanzarObjeto()

## States y States Transitions

Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- gameoverScreen
- winScreen

## Links

### Trello

https://trello.com/b/iCf00iot/juego-olgazin-gallinas

### Git

URls for the project repo and deploy
[Link Repo](https://github.com/OlgaZS/My-Game)
[link deploy](http://github.com)

### Slides

URls for the project presentation (slides)
https://slides.com/olgazinoveva/my-game-gallinas
