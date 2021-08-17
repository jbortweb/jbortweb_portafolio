var palabra = ["programar","diseñar","dominio","estudiar","aprobado","dificil","hosting","ahorcado","calamidad","funciona","string","matriz"];
var aleatorio = palabra[Math.floor(Math.random() * palabra.length)];  //Creamos las palabras del juego y la elegimos al azar
var guionbajo = [];
var intentos = 6;


window.onload=function(){                                                                        
                                                                        //Creamos los guiones con la longitud de la palabra y los guardamos en un array
    
    for (i=1; i<=aleatorio.length; i++){
        

        document.getElementById("guiones").innerHTML+= '_ ';  //creamos guiones con la longitud de la palabra

        guionbajo.push('_ ');   //Guardamos guiones en el array

    }

    guion = document.getElementById('guiones');  //damos estilos a los guiones, en este caso el tamaño del guion que queremos.
    guion.style.fontSize="40px";

    document.body.addEventListener('keypress', teclado);   //Evento para que funcione con el teclado.
}

function teclado(e){   //Funcion teclado donde damos un valor de letra al codigo ASCII 

    value=e.key     
    juega(value);
}


function juega(value){

    document.getElementById("utilizadas").value += value;  //Indicamos en el navegador la palabra indicada por el cliente

    var contador = 0;
    var caracter = value;
    var indiceletra = [];

    

    for (j=0; j<=aleatorio.length; j++){
        

        if (aleatorio[j]===caracter){                
            document.getElementById("errores").innerHTML ="";
            indiceletra.push(j);                    //Guardamos los indices donde se encuentra la letra en la palabra

            contador++;

            document.getElementById('encontradas').innerHTML = "Acertaste, hay "+contador+" '"+caracter.toUpperCase()+"' en la palabra";
            
        }
    }

    for (i = 0; i <indiceletra.length; i++ ){

        guionbajo[indiceletra[i]] = caracter;    //buscamos los guiones que coinciden con las letras acertadas.
    }
    
    document.getElementById("guiones").innerHTML = guionbajo.join("");   //escribimos las letras, convirtiendo el array guiones en string para quitar las comas.
    
    

    if (guionbajo.join("")==aleatorio) {

        document.getElementById('encontradas').innerHTML="Felicidades, lo has conseguido!!";

        conseguido = document.getElementById('encontradas');
        conseguido.style.color="#cb3234";
        conseguido.style.fontSize='30px';
    }

    
    
    if (contador == 0){
        intentos--;         //Restamos los intentos que le quedan al cliente
    } 

    if (intentos==5){

        document.getElementById("imagenes").src = "imatges/ahorcado_5.png";   //añadimos imagenes segun vaya fallando
        document.getElementById("errores").innerHTML ="Parece que esa letra no esta.";
        document.getElementById('encontradas').innerHTML="";
    }

    else if (intentos==4){

        document.getElementById("imagenes").src = "imatges/ahorcado_3.png";   
        document.getElementById("errores").innerHTML = "Ya sientes la soga alrededor de la cabeza?";
        document.getElementById('encontradas').innerHTML="";
    }

    else if (intentos==3){

        document.getElementById("imagenes").src = "imatges/ahorcado_2.png";   
        document.getElementById("errores").innerHTML = "Ya he acabado con tus brazos, vamos a por las piernas!!";
        document.getElementById('encontradas').innerHTML="";
    }

    else if (intentos==2){

        document.getElementById("imagenes").src = "imatges/ahorcado_1.png";   
        document.getElementById("errores").innerHTML = "Por aqui ya se asoma el principio del fin.";
        document.getElementById('encontradas').innerHTML="";
    }

    else if (intentos==1){

        document.getElementById("imagenes").src = "imatges/ahorcado_0.png";   
        document.getElementById("errores").innerHTML = "Has perdido, lo siento.";
        document.getElementById('encontradas').innerHTML="";
    } 
}

function borrar(){

    document.getElementById("utilizadas").value="";   //Borra los caracteres del display
}

function nuevo() {                                    //Actualiza la pagina y borra los caracteres.

    borrar();
    location.reload();
}
