class Carta {
    constructor(id, img){
        this._id = id;
        this._img = img;
    }

    get id(){
        return this._id;
    }

    set id(id){
        this._id = id;
    }

    get img(){
        return this._img;
    }
    
    set img(img){
        this._img = img;
    }

}