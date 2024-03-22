const input = document.getElementById("pokeName");
async function fetchPokemon(){
    let pokemon = input.value;
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
        if(!response.ok){
            throw new Error("Couldn't fetch given resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        
        imgElement.src = pokemonSprite;

    }
    catch(error){
        console.error(error);
        window.alert("Are you sure that's the real name of the Pokemon?");
    }

}