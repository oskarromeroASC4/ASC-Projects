function Aliens(xpos,ypos,width,height){
this.xpos = xpos;
this.ypos = ypos;
this.width = width;
this.height = height;
}
var alien = [];
for (var i =0; i<6; i++){
    alien.push(new Aliens(30 + (i*90),50,50,50));
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
var speed = 5;

function setup(){
    createCanvas(600, 700);
    background("grey");
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
    rect(shipXpos, 550, 100, 30);
    rect(((width/2) - 15) + x, 530, 30, 20);
        if (shipXpos >= 600 ){
            x = -x + 100 ;
        }else if(shipXpos <= 0){
            x = -x;
        }
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
             shots.push(new Shot((((width/2) - 15) + x), 530, 30, 20));
        }
    }
function addshot(){
    for(var i = 0; i < shots.length; i++){
        fill("white");
        rect(shots[i].xpos, shots[i].ypos, shots[i].width, shots[i].height);
        shots[i].ypos = shots[i].ypos - y;
    }
}

var xspeed = 2;
var yspeed = 10;

function drawAlien(){
    for (var i =0; i < alien.length; i++){
        fill("green");
        rect(alien[i].xpos,alien[i].ypos,alien[i].width,alien[i].height);
        alien[i].xpos = alien[i].xpos + xspeed;
        
        if(alien[i].xpos < 0 || alien[i].xpos > 600 - (alien[i].width) ){
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
           text("YOU LOSE", 305,260);
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
    text('Lives: ', 280, 650, 100, 100);
    for (i = 0; i < ships.length; i++){
        fill("green");
        rect(ships[i].xpos,ships[i].ypos,ships[i].width,ships[i].height);
    }
    for (i = 0; i < shooters.length; i++){
        fill("green");
        rect(shooters[i].xpos,shooters[i].ypos,shooters[i].width,shooters[i].height);
}
}   