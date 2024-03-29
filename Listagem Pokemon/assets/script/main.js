const url = 'https://pokeapi.co/api/v2/pokemon/';

function convertPokemonToHTML(pokemon){
                return `<li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>
            
                <div class="detail"> 
                    
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>
                    
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}"></div>
            </li>`
}


fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemonList) => {
        for(let i=0;i<pokemonList.lenght;i++){
            const pokemon = pokemonList[i];
            console.log(convertPokemonToHTML(pokemon));
        }
    })
    .catch((error) => console.error(error))