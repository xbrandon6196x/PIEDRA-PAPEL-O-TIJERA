function aleatorio(min, max) 
        {  
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
        
        //Reinicio de Seleccion Jugador
        let seleccionJugador = 0;
        //let min = 1; //opcion 2
        //let max = 3; //opcion 2
        let seleccionPC = aleatorio(1, 3);

        //opcion 3 de BATALA CON FUNCION


        

        //Preguntar la seleccion de jugador
        seleccionJugador= prompt("Selecciona uno: 1-Piedra 2-Papel 3-Tijera");

        //Aviso en alert de la seleccion de jugador
        if (seleccionJugador == 1)
        {
            alert("Elegiste Piedra ✊ ");
        }
        else if (seleccionJugador == 2)
        {
            alert("Elegiste Papel  📄");
        }
        else if (seleccionJugador == 3)
        {
            alert("Elegiste Tijera ✂️");
        }
        else 
        {
            alert("Elegiste algo erroneo");
        }

        //Seleccion PC
        //let seleccionPC = Math.floor(Math.random()* 3) + 1;
        
        //let seleccionPC = Math.floor(Math.random() * (max - min + 1)  + min) //opcion 2

        //Aviso seleccion PC
        if (seleccionPC == 1)
        {  
            alert("La PC eligio Piedra ✊");
        }
        else if (seleccionPC == 2)
        {
            alert("La PC eligio Papel 📄");
        }
        else if (seleccionPC == 3)
        {
            alert("La PC eligio Tijera ✂️");
        }
        else
        {
            alert("La PC eligio algo erroneo");
        }

        //BATALLA

        if (seleccionPC == seleccionJugador)
        {
            alert ("Y es... EMPATEEE!!!")
        }
        else if (seleccionPC == 3 && seleccionJugador == 1)
        {
            alert("GANASTE PERROOOOO! c:")
        }
        else if (seleccionPC == 1 && seleccionJugador == 2)
        {
            alert("GANASTE weeeee! :)")
        }
        else if (seleccionPC == 2 && seleccionJugador == 3)
        {
            alert("GANASTE broooo, congrats")
        }
        else
        {
            alert("PERDISTE MEEEEN, mejor suerte la prox.  :(")
        }