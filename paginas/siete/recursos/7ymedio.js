//CREACIÓN DE LA BARAJA

var carta = new Array(11);
var palos = new Array("Oros", "Bastos", "Copas", "Espadas");
var cartas_repe = new Array();
var puntos = 0;
var puntos_jugador, puntos_banca;

for (i = 1; i <= 10; i++) {
    carta[i] = palos;
}

//CARTA ALEATORIA

function aleatoria() {

    var num = parseInt((Math.random() * 10) + 1);
    var palo = parseInt(Math.random() * 4);
    var elegida = num + carta[num][palo];
    var selec;

    for (j = 0; j <= cartas_repe.length; j++) {

        selec = cartas_repe[j];

        while (selec == elegida) {

            num = parseInt((Math.random() * 10) + 1);
            palo = parseInt(Math.random() * 4);

            elegida = num + carta[num][palo];
            j = -1;
        }
    }

    cartas_repe.push(elegida);

    document.getElementById("carta_jugador").src = "imagenes/" + num + carta[num][palo] + ".jpg";
    document.getElementById("carta_jugador").style.visibility = 'visible';

    if (num <= 7) {
        puntos = puntos + num;
    }
    else {
        puntos = puntos + 0.5;
    }

    if (puntos > 7.5) {

        puntos_jugador = puntos;
        document.getElementById("puntos").value = puntos;
        recuento();

    }
    else document.getElementById("puntos").value = puntos;

    document.getElementById("todas_cartas").innerHTML += "<img id='carta_jugador' alt='' src='imagenes/" + num + carta[num][palo] + ".jpg' style='height: 97px; width: 66px; margin-top: 10px; margin-left: 4px;' />"

}

//FUNCION PLANTARSE

function plantarse() {
    document.getElementById("im_jugar").src = "imagenes/trasera.jpg";
    document.getElementById("im_jugar").style.cursor = "default";
    document.getElementById("im_jugar").onclick = " ";
    puntos_jugador = puntos;
    puntos = 0;
    banca();
}

//FUNCION JUGAR BANCA

function banca() {

    var num = parseInt((Math.random() * 10) + 1);
    var palo = parseInt(Math.random() * 4);
    var elegida = num + carta[num][palo];
    var selec;

    for (j = 0; j <= cartas_repe.length; j++) {

        selec = cartas_repe[j];

        while (selec == elegida) {
            num = parseInt((Math.random() * 10) + 1);
            palo = parseInt(Math.random() * 4);

            elegida = num + carta[num][palo];
            j = -1;
        }
    }

    cartas_repe.push(elegida);

    document.getElementById("carta_banca").src = "imagenes/" + num + carta[num][palo] + ".jpg";
    document.getElementById("carta_banca").style.visibility = 'visible';

    if (num <= 7) {
        puntos = puntos + num;
    } else {
        puntos = puntos + 0.5;
    }

    if (puntos > 7.5) {
        recuento();
        document.getElementById("puntos2").value = puntos;
        document.getElementById("todas_cartas_banca").innerHTML += "<img id='carta_banca' alt='' src='imagenes/" + num + carta[num][palo] + ".jpg' style='height: 97px; width: 66px; margin-top: 10px; margin-left: 4px;' />"
    } else {
        document.getElementById("puntos2").value = puntos;
        document.getElementById("todas_cartas_banca").innerHTML += "<img id='carta_banca' alt='' src='imagenes/" + num + carta[num][palo] + ".jpg' style='height: 97px; width: 66px; margin-top: 10px; margin-left: 4px;' />"

        if (puntos <= puntos_jugador) {
            setTimeout("banca()", 1000);
        } else {
            recuento();
        }
    }
}

  //RECUENTO
  function recuento() {
    puntos_banca = puntos;

    if (puntos_banca > puntos_jugador && puntos_banca <= 7.5 || puntos_jugador>7.5) {
        document.getElementById("texto").value = "GANA LA BANCA";

    }
    else if (puntos_jugador > puntos_banca && puntos_jugador <= 7.5 || puntos_banca > 7.5) {
        document.getElementById("texto").value = "HAS GANADO";

    }
    else if (puntos_jugador == puntos_banca) {
        document.getElementById("texto").value = "EMPATE";
    }

    bloquear();
}

//BLOQUEAR TODO
function bloquear() {

    document.getElementById("im_jugar").onclick = " ";
    document.getElementById("boton2").disabled = 'disabeled';
    document.getElementById("im_jugar").src = "imagenes/trasera.jpg";
    document.getElementById("im_jugar").style.cursor = "default";
}
