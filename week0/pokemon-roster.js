var pokemonarray1 = ["Zigzagoon", "Normal", 38, 41, 30, false]
var pokemonarray2 = ["Umbreon", "Dark", 95, 110, 65, false]
var pokemonarray3 = ["Unown", "Psychic", 48, 48, 72, false]
var pokemonarray4 = ["Nuzleaf", "Dark Grass", 70, 40, 70, false]
var pokemonarray5 = ["Mewtwo", "Psychic", 106, 90, 110, false]
var pokemonarray6 = ["Moltres", "Fire Flying", 90, 90, 100, true]
//name, type, hp, def, atk, legend
var pokemons = [pokemonarray1, pokemonarray2, pokemonarray3, pokemonarray4, pokemonarray5, pokemonarray6]

for(i = 0; i < pokemons.length; i++){
    for(j = 0; j < pokemons[i].length; j++)
    console.log(pokemons[i][j])
}