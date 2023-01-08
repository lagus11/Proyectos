class Jugador {

    constructor(nombre, posicionY){
        this._nombre = nombre;
        this._posicionY = posicionY;
    }

    get nombre(){
        return this._nombre;
    }

    get posicionY(){
        return this._posicionY;
    }

    set posicionY(posicionY){
        this._posicionY = posicionY;
    }

}//Jugador