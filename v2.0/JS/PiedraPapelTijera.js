function aleatorio(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) + min)
         //Math.floor(Math.random()* 3) + 1;
}


function elegir(jugada)
{
    let resultado = "";
    if (jugada == 1) {
        resultado = "Piedra ✊";
    }
    else if (jugada == 2) {
        resultado =  "papel 📄";
    }
    else if (jugada == 3) {
        resultado = "Tijera ✂️";
    }
    else {
        resultado = ERROR;
    }
    return resultado;
}

//Todo va unido a funcion jugar.

function jugar() 
{



//Reinicio de Seleccion Jugador
let seleccionJugador = 0;

//Seleccion de PC va a variar de 1 a 3 dependiendo random
let seleccionPC = 0

//seleccionas las perdidas y ganadas
let ganadas = 0
let perdidas = 0


while (ganadas < 3 && perdidas < 3)
{  
    seleccionPC = aleatorio(1, 3);



    //Preguntar la seleccion de jugador
    alert("Vas ganando " + ganadas + " Vas perdiendo " + perdidas + " veces");

    seleccionJugador = prompt("Selecciona uno: 1-Piedra 2-Papel 3-Tijera");

    alert("PC ELIGE: " + elegir(seleccionPC));
    alert("Tu elegiste: " + elegir(seleccionJugador));

    //BATALLA

    if (seleccionPC == seleccionJugador) {
        resultado = "Y es... EMPATEEE!!!"
    }
    else if (seleccionPC == 3 && seleccionJugador == 1) {
        resultado = "GANASTE PERROOOOO! c:"
        ganadas = ganadas + 1
    }
    else if (seleccionPC == 1 && seleccionJugador == 2) {
        resultado = "GANASTE weeeee! :)"
        ganadas = ganadas + 1
    }
    else if (seleccionPC == 2 && seleccionJugador == 3) {
        resultado = "GANASTE broooo, congrats"
        ganadas = ganadas + 1

    }
    else {
        resultado = "PERDISTE MEEEEN, mejor suerte la prox.  :("
        perdidas = perdidas + 1
    }

    document.getElementById("resultado").innerText = resultado;

}
alert("TERMINOOOOOO!");
alert("Quedo en Marcador Tu: " + ganadas + " Ganadas y la PC: " + perdidas + " perdidas");
}