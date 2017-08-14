

function Aliens( xpos,ypos,width,height){
this.xpos = xpos;
this.ypos = ypos;
this.width = width;
this.height = height;


}

var alien = [];
var alien2 = [];
var alien3 = [];
var alien4 = [];

for (var i =0; i<10; i++){
    for(var j = 0; j <4; j++){
    alien.push(new Aliens(30 + (i*90),10 + (j*80),70,70));
    }
}







function Shot(xpos,ypos,width,height){
this.xpos = xpos;
this.ypos = ypos;
this.width = width;
this.height = height;
}
var shots = [];
var a = 0;
var x =0;
var y = 10;


function setup(){
    createCanvas(1000, 700);
    
    ballImg = loadImage("https://vignette2.wikia.nocookie.net/ashsencounters/images/6/62/Ash_holding_a_Pokeball_transparent.gif/revision/latest?cb=20140701175439");
    pokeImg = loadImage("https://pbs.twimg.com/profile_images/736489088/pokebola.gif");
    pikaImg = loadImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+Math.floor(Math.random()*700)+".png");
    bulbImg = loadImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png");
    charImg = loadImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png");
    mewImg = loadImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png");
    lifeImg = loadImage("https://vignette2.wikia.nocookie.net/shipping/images/6/66/Pixel_heart_icon.png/revision/latest?cb=20151011174450");
}

function draw(){
    background("grey");
    drawShip();
    move();
    drawAlien();
    addshot();
    disappear();
    drawScore();
    drawLives();
    }
    
 function drawShip(){
    fill('green');
 var shipXpos = (((width/2) - 50) + x); 
    image(ballImg, shipXpos, 550, 100, 50);
 }

function move(){
if (keyIsDown(LEFT_ARROW)){
x -= 5;
}
if (keyIsDown(RIGHT_ARROW)){
x += 5;
}
}

function keyPressed(){
    if (keyCode == 32){
             shots.push(new Shot((((width/2) - 15) + x), 530, 45, 30));
        }
    }
function addshot(){
    for(var i = 0; i < shots.length; i++){
        fill("white");
        image(pokeImg, shots[i].xpos, shots[i].ypos, shots[i].width, shots[i].height);
        shots[i].ypos = shots[i].ypos - y;
    }
}

var xspeed = 1.5;
var yspeed = 10;

function drawAlien(){
    for (var i =0; i < alien.length; i++){
        image(pikaImg, alien[i].xpos,alien[i].ypos,alien[i].width +50 ,alien[i].height+50);
        alien[i].xpos = alien[i].xpos + xspeed;
        
        if(alien[i].xpos < 0 || alien[i].xpos > 1000 - (alien[i].width) ){
            xspeed = -xspeed;            
            for (var j =0; j < alien.length; j++){
                alien[j].ypos = alien[j].ypos + yspeed;
            }
        }
       if(alien[i].ypos >= 510){
           background("black");
           fill("white");
           textSize(50);
           textAlign(CENTER);
           text("YOU LOSE", 500,260);
       }
    }

}
function disappear(){
    for (var i = 0; i < alien.length;i++){
        for(var j = 0; j < shots.length; j++){
        if (shots[j].xpos >= alien[i].xpos && shots[j].xpos <= alien[i].xpos 
        + alien[i].width && shots[j].ypos >= alien[i].ypos && shots[j].ypos 
        <= alien[i].ypos + alien[i].height) {
        shots.splice(j,j);
         alien.splice(i,1);
         score = score + 10;
         
        }
        
        }
    }


}

var score = 0;
function drawScore(){
    textFont("Georgia");
    fill('black');
    textSize(25);
    text("Score: " + score, 20, 500, 100, 100);
}

function Ships(xpos, ypos, width, height){
    this.xpos = xpos
    this.ypos = ypos
    this.width = width
    this.height = height
}

function Shooter(xpos, ypos, width, height){
    this.xpos = xpos
    this.ypos = ypos
    this.width = width
    this.height = height
}

var ships = [];
for(i = 0; i < 4; i++){
    ships.push(new Ships(350 + (i * 60), 655, 50, 15));
}

var shooters = [];
for(i = 0; i < 4; i++){
    shooters.push(new Shooter(368 + (i * 60), 645, 15, 10));
}

function drawLives(){
    fill('black');
    textSize(20);
    text('Lives: ', 710, 655, 100, 100);
    for (i = 0; i < 3; i++){
        fill("green");
        image(lifeImg, ships[i].xpos + 450,ships[i].ypos,ships[i].width - 10,ships[i].height+10);
    }
    
}   