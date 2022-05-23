

async function getPokemon() {
    // let name = document.getElementById('search').ariaValueMax.toLowerCase();
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/3`);
    let pokemon = await response.json();
    console.log(pokemon);
}
getPokemon();