
var PokeURL = "http://pokeapi.co/api/v2/pokemon/"

$.get(PokeURL, function(data){
    console.log(data.results);
    for(i = 0; i< data.results.length;i++){
        console.log(data.results[i].url);
    }
})

var PokeURL2 = "http://pokeapi.co/api/v2/pokemon/1/"


$.get(PokeURL2, function(data){
    console.log(data.types[1].type.name);

})

function evolution()
{
var input = document.getElementById("userInput");
if(input =="v"){
    $("div").append('<img id="YourPokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png">');
}else if(input=="x"){
    $("div").append('<img id="YourPokemon" src="https://vignette1.wikia.nocookie.net/nintendo/images/d/d1/PKMN004.png/revision/latest?cb=20120527010430&path-prefix=en">');
}
}
