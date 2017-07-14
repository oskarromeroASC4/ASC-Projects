var charizard = {
    "attack" : "Blaze",
    "HP" : 266,
    "legendary" : false,
    "types" : ["Fire", "Flying"]
};


function Superhero(realName, power, sidekick, race, gender, hideout, archNemesis, universe){
    this.realName = realName;
    this.power = power;
    this.sidekick = sidekick;
    this.race = race;
    this.gender = gender;
    this.hideout = hideout;
    this.archNemesis = archNemesis;
    this.universe = universe;
    this.talk = function(){
        console.log("Hi my name is" + realName);
    }
}

var superman = new Superhero('Clark Kent', 'Heat Vision', false, 
                            'Kryptonian', 'Male', 'Metropolis',
                            'Lex Luther', 'DC Universe');



function Pizza(sauce, cheese, toppings, size){
    this.sauce = sauce;
    this.cheese = cheese;
    this.toppings = toppings;
    this.size = size;
}

var pizza = new Pizza('tomato', 'mozzarella', ['pineapples', 'ham', 'bacon'], 'XXL');
