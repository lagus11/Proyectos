class Jugador {
    constructor(id, turno){
        this._id = id;
        this._turno = turno;
    }

    get id(){
        return this._id;
    }

    get turno(){
        return this._turno;
    }

    set turno(turno){
        this._turno = turno;
    }
}