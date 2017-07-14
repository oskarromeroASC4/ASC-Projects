var pokemonsArray = [Celebi, Eevee, Squirtle, Pikachu, Clefairy, Charmander];
function Pokemons(Name, Type, HP, DEF, ATK, Legend){
    this.Name = Name;
    this.Type = Type;
    this.HP = HP;
    this.DEF = DEF;
    this.ATK = ATK;
    this.Legend = Legend;
}

var Celebi = new Pokemons('Celebi', 'Psychic Grass', 100, 100, 100, false)
var Eevee = new Pokemons('Eevee', 'Normal', 55, 50, 55, false);
var Squirtle = new Pokemons('Squirtle', 'Water', 44, 65, 48, false);
var Pikachu = new Pokemons('Pikachu', 'Electric', 35, 40, 55, false);
var Clefairy = new Pokemons('Clefairy', 'Fairy', 70, 48, 45, false);
var Charmander = new Pokemons('Charmander', 'Fire', 39, 43, 52, false);

for(i = 0; i < pokemonsArray.length; i++){
    for(j = 0; j < pokemonsArray[i].length; j++);
    console.log(pokemonsArray[i][j]);   
}

console.log(pokemonsArray[0].HP)