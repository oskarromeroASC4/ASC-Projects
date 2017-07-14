var prompt = require('prompt-sync')();

var mashArray = ["Peach's Castle", "Dream Land", "Temple", "Final Destination"];
function battleStage(stage){
    var stage = Math.floor(Math.random() * 4)
    mashArray = mashArray[stage];
    console.log(mashArray);
}
battleStage();
var firstQuestion = [];
var secondQuestion = [];

var attack = prompt("How many times will you strike? (1,3,5)");
if(attack == 1){
    firstQuestion.push(1);
}else if(attack == 3){
    firstQuestion.push(3);
}else if(attack == 5){
    firstQuestion.push(5);
}else{
    firstQuestion.push(attack);
    console.log("You just couldn't contain yourself!");
}

var enemy = prompt("Who will you choose to fight? (Yoshi, Donkey Kong, Zelda)");
if(enemy == "Yoshi"){
    secondQuestion.push("Yoshi");
}else if(enemy == "Donkey Kong"){
    secondQuestion.push("Donkey Kong");
}else if(enemy == "Zelda"){
    secondQuestion.push("Zelda");
}else{
    secondQuestion.push(enemy);
    console.log("Fine, choose your own enemy.");
}

console.log("You fought " + secondQuestion + " in the " + mashArray + " and hit them " + firstQuestion + " times. Too bad. Mewtwo wins!");