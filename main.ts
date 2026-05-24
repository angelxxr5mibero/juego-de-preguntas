let puntos = 0
scene.setBackgroundColor(2)
game.splash("Juego de Preguntas")
game.splash("Responde correctamente para ganar puntos")
// Pregunta 1
let respuesta = game.askForNumber("Cuanto es 2 + 2?")
if (respuesta == 4) {
    puntos += 2
    scene.setBackgroundColor(7)
    game.splash("Correcto! +2 puntos")
} else {
    game.splash("Incorrecto")
}
// Pregunta 2
respuesta = game.askForNumber("Cuanto es 5 x 3?")
if (respuesta == 15) {
    puntos += 2
    scene.setBackgroundColor(9)
    game.splash("Correcto! +2 puntos")
} else {
    game.splash("Incorrecto")
}
// Pregunta 3
respuesta = game.askForNumber("Cuantos dias tiene una semana?")
if (respuesta == 7) {
    puntos += 2
    scene.setBackgroundColor(10)
    game.splash("Correcto! +2 puntos")
} else {
    game.splash("Incorrecto")
}
// Pregunta 4
respuesta = game.askForNumber("Cuanto es 10 - 6?")
if (respuesta == 4) {
    puntos += 2
    scene.setBackgroundColor(13)
    game.splash("Correcto! +2 puntos")
} else {
    game.splash("Incorrecto")
}
// Resultado final
game.splash("Juego terminado")
game.splash("Puntos totales: " + puntos)
if (puntos == 8) {
    game.splash("Color final: Morado")
} else if (puntos >= 4) {
    game.splash("Color final: Verde")
} else {
    game.splash("Color final: Azul")
}
