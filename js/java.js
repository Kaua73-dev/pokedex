// get elemtents 
let button = document.getElementById('searchBtn');
let input = document.getElementById('pokemonInput');
// ger resposta elements 
let imgPoke = document.getElementById('pokemonImg');
let namePoke = document.getElementById('pokemonName');
let typePoke = document.getElementById('pokemonType');
let weightPoke = document.getElementById('pokemonWeight');
let abilitiesPoke = document.getElementById('pokemonAbilities');


// event 
button.addEventListener('click', function(){
pokedexAPI();
});

async function pokedexAPI(){
    
let pokemon = input.value.toLowerCase();
let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

let response = await fetch(url);

if(!response.ok){
    alert('Pókemon not found');
    return;
}


let data = await response.json();

// informations 
data.sprites.front_default;
data.name
data.types[0].type.name
data.weight
data.abilities[0].ability.name

// transform for the page 
let text = ''
for(let i = 0; i < data.abilities.length; i++){
text += data.abilities[i].ability.name + ' ';
}

// add on html
imgPoke.style.visibility = "visible";
imgPoke.src = data.sprites.front_default
namePoke.innerText = `Name: ${data.name}`
typePoke.innerText = `Type: ${data.types[0].type.name}`
weightPoke.innerText = `Weight: ${data.weight}`
abilitiesPoke.innerText = `Abilities: ${text}`
}