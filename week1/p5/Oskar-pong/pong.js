function setup(){
    createCanvas(1000, 1000);
    background('black');

}
var xCoord = 80;
var yCoord= 80;
var xspeed = 10;
var yspeed = 10;

function draw(){
    background('black');
    var x = random([0], [255]);
    var y = random([0], [255]);
    var z = random([0], [255]);
    fill(x, y, z);
    ellipse(xCoord, yCoord, 80, 80); 
    
    xCoord = xCoord + xspeed;
    if (xCoord < 0 || xCoord > 1000){
        xspeed = -xspeed;
    }
    yCoord = yCoord + yspeed;
    if(yCoord < 0 || yCoord > 920){
        yspeed = -yspeed;

   
    }


}