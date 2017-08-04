$(document).ready(setup);

var HP = 100;
var Gold = 0;
var Slain = 0;

function setup(){
    $("body").append("<h1>Welcome to Ogre Figther v1.0<h1>");
    $("body").append("<p>Ogres are attacking your village! When you slay one, they drop 10 gold. The more gold you carry, though, the harder it is to defeat an ogre. </p>");
    $("body").append("<h2> STATS </h2>");
    $("body").append("<p class='stats'></p>");
    $("body").append("<button onclick='attack()'>Attack the button</button>");
    $("body").append("<div class='ogres'></div>"); 
}

function stats(){
   $(".stats").text("HP: " + HP+ " // Gold: " + Gold + " // Ogres Slain: " + slain);
}

function attack(){
    if (HP > 0){
        if(Math.random()*100 > Gold){
            Gold = Gold + 10;
            Slain = Slain + 1;
            $(".ogres").prepend("<p> You won! + 10 gold.</p>")
        }else{
            Gold= Gold -1;
            HP = HP -1;
            $(".ogres").prepend("<p> You lost! - 1 gold.</p>")
        } 
    }
}


