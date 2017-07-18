function setup(){
    createCanvas(500, 500);
    background('black');
}  
var x = 0;
var x1 = -50;
var x2 = -100;
var x3 = -150; 
var x4 = -200;
function draw(){
    background('black');
    fill(255);
    //the text function allows the word to be typed on the screen
    //the numbers within the text function establish where they appear 
    //the x-variables allow the word to move along the screen
    text("Please type the correct form of any mispelled word you see.", 90, 80, 340, 100);
    text("Current Points  0", 200, 300, 300, 100);
    text("Z", x, 140, 100, 100);
    x = x + 1;
    text("C", x1, 200, 100, 100);
    x1 = x1 + 1;
    text("F", x2, 160, 100, 100);
    x2 = x2 + 1;
    text("S", x3, 230, 100, 100);
    x3 = x3 + 1; 
    text("A", x4, 120, 100, 100);
    x4 = x4 + 1;
}

