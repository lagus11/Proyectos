const pokemon = [
    new Pokemon('charizard','FIRE', '1.7 m', 100, 'FLAMES', '90.5 Kg','img/Charizard.png'),
    new Pokemon('square','WATER', '1.0 m', 85, 'WATERJET', '60.0 Kg','img/square.png'),
    new Pokemon('evee','NORMAL', '0.3 m', 91, 'RUN AWAY', '6.5 Kg','img/evee.png'),
    new Pokemon('pikachu','ELECTRICITY', '1.04 m', 97, 'SKULL BASH', '6.2 Kg','img/pikachu.png'),
    new Pokemon('bulbasaur','PLANT', '0.7 m', 65, 'FLAMES', '6.5 Kg','img/bulbasaur.png')
];

const PokemonPrincipal = (Pokemon) => {
    document.getElementById('nombre_pokemon').innerHTML = Pokemon.name;
    document.getElementById('pokemon').src = Pokemon.img;
    document.getElementById('numero_Pokemon').innerHTML = Pokemon.no;
    document.getElementById('tipo_Pokemon').innerHTML = Pokemon.type;
    document.getElementById('height_Pokemon').innerHTML = Pokemon.height;
    document.getElementById('level_Pokemon').innerHTML = Pokemon.level;
    document.getElementById('hability_Pokemon').innerHTML =  Pokemon.hability;
    document.getElementById('weight_Pokemon').innerHTML = Pokemon.weight;
}//cargarPokemonPrincipal

const cargarPokemonPrincipal = (no=1) => {
    PokemonPrincipal(pokemon[no-1]);
    cargarOtherPokemones(document.getElementById('numero_Pokemon').innerHTML);
    tipoPokemon(pokemon[no-1]._type);
}//cargarPokemonPrincipal

const cargarOtherPokemones = (no) => {
    let todoPokemones = '';
    for(otherPokemones of pokemon){
        if(no != otherPokemones.no){
            todoPokemones += `
            <div class="other_pokemones" onclick="cargarPokemonPrincipal(${otherPokemones.no})">
                    <img id ="img_other_pokemones" src="${otherPokemones.img}">
            </div>`;
        }//if
    }//for
    document.getElementById('otros_pokemones').innerHTML = todoPokemones
}//cargarOtherPokemones

const tipoPokemon = (tipo) => {
    switch (tipo.toUpperCase()){
        case 'FIRE':
            document.getElementById('tipoElemento').src = `img/tipoFuego.png`;
            break;
        ;
        case 'WATER':
            document.getElementById('tipoElemento').src = `img/tipoAgua.png`;
            break;
        ;
        case 'ELECTRICITY':
            document.getElementById('tipoElemento').src = `img/tipoElectrico.png`;
            break;
        ;
        case 'PLANT':
            document.getElementById('tipoElemento').src = `img/tipoPlanta.png`;
            break;
        ;
        default:
            document.getElementById('tipoElemento').src = `img/tipoDefault.png`;
            break;
            ;
    }//swith
}//tipoPokemon
