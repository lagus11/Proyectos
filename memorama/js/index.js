const par = [];
const parAbrio = [];
let contadorClick = 0;

const carta = [
    new Carta('0', 'img/html5.png'),
    new Carta('1', 'img/mongoDb.png'),
    new Carta('2', 'img/img_laptop.png'),
    new Carta('3', 'img/github.png'),
    new Carta('4', 'img/linkeind.png'),
    new Carta('5', 'img/js.png'),

];

let contenedorCartas = [];

const llenarAleatoria = () => {
    let arregloAux = [];
    for(let i = 0; i < carta.length; i++){
        arregloAux.push(carta[i]._id);
        arregloAux.push(carta[i]._id);
    }
    
    while( arregloAux.length > 0 ){
        const numeroAleatorio = numAleatorio(arregloAux.length - 1);
        contenedorCartas.push(arregloAux[numeroAleatorio]);
        arregloAux.splice(numeroAleatorio, 1);
    }

    llenarCartas();
};

const numAleatorio = (superior) => {
    const inferior = 0;
    var numPosibilidades = superior - inferior;
    var aleatorio = Math.random() * (numPosibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    return inferior + aleatorio;
};

const llenarCartas = () => {
    let cartas = '';
    for(let i = 0; i < contenedorCartas.length; i++){
        cartas += 
        `<div class="container_img" id="${i}" onclick="girarDest(this)">
                <h2>?</h2>
        </div>`;
    }
    document.getElementById('main').innerHTML = cartas
};

const girarDest = (e) => {
    contadorClick ++;
    if(par.length < 2 && contadorClick < 3){
        const div = document.getElementById(e.id).classList.add('girarDest');
        setTimeout(() => {
            document.getElementById(e.id).innerHTML = `<img src="${carta[contenedorCartas[e.id]].img}" />`;
            validarPar(e.id);
        }, 500);
        setTimeout(() => {
            document.getElementById(e.id).classList.remove('girarDest');
        }, 1000);
    } 
};

const girarTapar = (id) => {
    document.getElementById(id).classList.add('girarTapar');
    setTimeout(() => {
        document.getElementById(id).innerHTML = `<h2>?</h2>`;
    }, 500);
    setTimeout(() => {
        document.getElementById(id).classList.remove('girarTapar');
    }, 1000);
};

const validarPar = (id) => {
    parAbrio.push(id);
    par.push(contenedorCartas[id]);
    setTimeout(() => {
        if(par.length === 2){
            contadorClick = 0;
            if(par[0] === par[1]){
                console.log("par");
            }else{
                girarTapar(parAbrio[0]);
                girarTapar(parAbrio[1]);
            }
            parAbrio.splice(0, parAbrio.length);
            par.splice(0, par.length);
        }
    }, 2000);
};


llenarAleatoria();
