
const jugador1 = new Jugador(1, 1);
const jugador2 = new Jugador(2, 2);

let juego = [[0,0,0],[0,0,0],[0,0,0]];
let contador = 0;

let agregarSimbolo = (id) => {
    if(jugador1.turno === 1){
        let validarLlenoCasilla = agregarArreglo(id, jugador1.id);
        if(validarLlenoCasilla){ 
            jugador1.turno = 2;
            circulo(id); 
        }
    }else{
        let validarLlenoCasilla = agregarArreglo(id, jugador2.id);
        if(validarLlenoCasilla){
            jugador1.turno = 1; 
            equis(id); 
        }
    }
}//agregarSimbolo

let circulo = (id) => {
    document.getElementById(id).innerHTML = `<div id="circulo"></div>`;
}//circulo
let equis = (id) => {
    document.getElementById(id).innerHTML = `<p id="equis">X</p>`;
}//equis


let agregarArreglo = (posicion, jugador) => {
    let numeroValidar = Number(posicion) - 1;
    if(posicion < 4){
        if(juego[0][numeroValidar] === 0){
            juego[0][numeroValidar] = jugador;
            return true;      
        }
    }else{
        if(posicion < 7){
            if(juego[1][numeroValidar - 3] === 0){
                juego[1][numeroValidar - 3] = jugador;
                return true;      
            }
        }else{
            if(posicion < 10){
                if(juego[2][numeroValidar - 6] === 0){
                    juego[2][numeroValidar- 6] = jugador;
                    return true;      
                }
            }
        }
    } 
}//agregarArreglo

let validarGano = (id) => {
    let contador = 0;
    for(let j = 0; j < 3; j++){
        for(let i = 0; i < 3; i++){
            if(juego[j][i] === id){
                contador ++;
                if(contador === 3){
                    return true;
                }
            }//if
        }
        contador = 0;
    }

    for(let j = 0; j < 3; j++){
        for(let i = 0; i < 3; i++){
            if(juego[i][j] === id){
                contador ++;
                if(contador === 3){
                    return true;
                }
            }//if
        }
        contador = 0;
    }

    //diagonales incremento
    for(let i = 0; i < 3; i++){
        if(juego[i][i] == id){
            contador ++;
            if(contador === 3){
                return true;
            }
        }
    }

    //diagonal decremento
    contador = 0;
    let auxIncDiag = 0;
    for(let i = 2; i >= 0; i--){
        if(juego[i][auxIncDiag] == id){
            contador ++;
            auxIncDiag ++;
            if(contador === 3){
                return true;
            }
        }
    }
    return false;
}

let limpiar = () => {
    
    alert("Limpiar campos");
    
    for(let i = 1; i < 10; i++){
        document.getElementById(`${i}`).innerHTML = ``;
        document.getElementById(`${i}`).innerHTML = ``;
    }
    juego = [[0,0,0],[0,0,0],[0,0,0]];
    contador = 0;
    document.getElementById("encabezado").innerHTML = ``;
}//limpiar

document.addEventListener('mouseup', event =>{
    let casilla = event.target.getAttribute("id");
    agregarSimbolo(casilla);

    
    
    if(validarGano(1)){
        document.getElementById("encabezado").innerHTML = `<h3 id="titulo-Ganador">Gano Jugador 1</h3>`;
        setTimeout(limpiar, 1000);
    }else {
        if(validarGano(2)){
            document.getElementById("encabezado").innerHTML = `<h3 id="titulo-Ganador">Gano Jugador 2</h3>`;
            setTimeout(limpiar, 1000);
        }else {
            //console.log(juego[0].includes(0));
            if((!juego[0].includes(0) && !juego[1].includes(0) && !juego[2].includes(0))){
                document.getElementById("encabezado").innerHTML = `<h3 id="titulo-Ganador">NADIE GANO</h3>`;
                setTimeout(limpiar, 1000);
            }
        }
    }

});




