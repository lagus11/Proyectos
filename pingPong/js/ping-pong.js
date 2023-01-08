
const jugador1 = new Jugador('player1', 10);
const jugador2 = new Jugador('player2', 10);

let yPelota = 346;
let xPelota = 440;
let randomX = Math.floor(Math.random()*2);
let randomY = Math.floor(Math.random()*2);
let tiempo = 60;
let puntajeP1 = 0;
let puntajeP2 = 0;


alert("J1: w subir, s bajar\nJ2: o subir, l bajar \nNo terminado ambas oprimidas");

document.addEventListener("keydown", (event1) => {

    document.addEventListener("keydown", (event2) => {
        if( event1.key === "w" || event2.key === "w"){
            console.log("solo w");
        }
    
        if( event1.key === "o" || event2.key === "o"){
            console.log("solo o");
        }
    
        if( (event1.key === "w" && event2.key === "o") || (event2.key === "w" && event1.key === "o")){
            console.log("ambas teclas");
        }
    });

    
    if( event.key === "s" && jugador1.posicionY < 592){
        subir(jugador1);
        console.log("w");
    }
    if( event.key === "w" && jugador1.posicionY > 10){
        bajar(jugador1);
    }

    if( event.key === "l" && jugador2.posicionY < 592){
        subir(jugador2);
        console.log("o");
    }
    if( event.key === "o" && jugador2.posicionY > 10){
        bajar(jugador2);
    }
    
    
}, false);

function subir(jugador){
    jugador.posicionY += 15;
    document.getElementById(jugador.nombre).style.marginTop = `${jugador.posicionY}px`;
}

function bajar(jugador){ 
    jugador.posicionY -= 15;
    document.getElementById(jugador.nombre).style.marginTop = `${jugador.posicionY}px`;
}

let moverPelota = () => {

    if(randomX === 1){
        xPelota += 2;
    }else{
        xPelota -= 2;
    }

    if(randomY === 1){
        yPelota += 2;
    }else{
        yPelota -= 2;
    }

    if(xPelota > 885){
        randomX = 0;
    }

    if(xPelota < 5){
        randomX = 1;
    }

    if(yPelota > 685){
        randomY = 0;
    }

    if(yPelota < 5){
        randomY = 1;
    }

    //ball en el rango del player 1
    if(xPelota <= 30 && yPelota >= jugador1._posicionY && yPelota <= jugador1._posicionY + 100){
        randomX = 1;
    }

    //ball en el rango del player 2
    if(xPelota >= 850 && yPelota >= jugador2._posicionY && yPelota <= jugador2._posicionY + 100){
        randomX = 0;
    }

    document.getElementById("ball").style.marginTop = `${yPelota}px`;
    document.getElementById("ball").style.marginLeft = `${xPelota}px`;

    puntaje();
}

let RestasTiempo = () => {
    tiempo --;
    document.getElementById('tiempo').innerHTML = `Tiempo: ${tiempo} segundos`;
    if(tiempo === 0){
        alert("Fin del Juego");
        reiniciar();
    }
}//tiempo 

let reiniciar = () => {
    
    yPelota = 346;
    xPelota = 440;
    tiempo = 60;
    puntajeP1 = 0;
    puntajeP2 = 0;
    jugador1.posicionY = 10;
    jugador2.posicionY = 10;
    document.getElementById(jugador1.nombre).style.marginTop = `${jugador1.posicionY}px`;
    document.getElementById(jugador2.nombre).style.marginTop = `${jugador2.posicionY}px`;
}


let puntaje = () => {
    if(xPelota === 4){
        puntajeP2 ++;
        document.getElementById('marcador').innerHTML = `P1: ${puntajeP1} P2: ${puntajeP2} `;
    }
    if(xPelota === 886){
        puntajeP1 ++;
        document.getElementById('marcador').innerHTML = `P1: ${puntajeP1} P2: ${puntajeP2} `;
    }
}//puntaje


setInterval(moverPelota,5);
setInterval(RestasTiempo, 1000);