
document.getElementById('run').addEventListener('click', (e) => {
    e.preventDefault();
    getPokemon();
async function getPokemon() {
    let PokeName = document.getElementById('pokemon-name');
    let PokeId = document.getElementById('pokemon-id');
    let PokeImage = document.getElementById('pokemon-image');
    let input = document.getElementById('search').value;
    let moveList = document.getElementById('moves-list');

    let Api = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    let Pokemon = await Api.json();
    PokeName.innerHTML = Pokemon.name;
    PokeImage.setAttribute('src', Pokemon.sprites.front_default)
    PokeId.innerHTML = `id:${Pokemon.id}`;

    let loopTime = 4
    if ( Pokemon.moves.length < 4) {
       loopTime = Pokemon.moves.length
    }
    else {
        loopTime = 4;
    }

    for (i = 0; i < loopTime; i++) {
        let li = document.createElement('li')
        moveList.append(li);
        li.append(Pokemon.moves[i])
    }

}   

});



