class Pokemon {
    static contadorPokemon = 0;
    
    constructor(name, type, height, level, hability, weight, img){
        this._no = ++Pokemon.contadorPokemon;
        this._name = name;
        this._type = type;
        this._height = height;
        this._level = level;
        this._hability = hability;
        this._weight = weight;
        this._img = img;
    }//constructor

    get no(){
        return this._no;
    }//get no

    get name(){
        return this._name;
    }//get name

    set name(name){
        this._name = name;
    }//set name

    get type(){
        return this._type;
    }//get type

    set type(type){
        this._type = type;
    }//set type

    get height(){
        return this._height;
    }//get height

    set height(height){
        this._height = height;
    }//set height

    get level(){
        return this._level;
    }//get level

    set level(level){
        this._level = level;
    }//set level

    get hability(){
        return this._hability;
    }//get hability

    set hability(hability){
        this._hability = hability;
    }//set hability

    get weight(){
        return this._weight;
    }//get weight

    set weight(weight){
        this._weight = weight;
    }//set weight

    get img(){
        return this._img;
    }//get img

    set img(img){
        this._img = img;
    }//set img

}//Pokemon