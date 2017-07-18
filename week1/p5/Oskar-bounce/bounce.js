function setup(){
    createCanvas(1000, 1000);
    background('black');

}
var xCoord = 80;
var yCoord= 80;
function draw(){
    background('black');
    var x = random([0], [255]);
    var y = random([0], [255]);
    var z = random([0], [255]);
    fill(x, y, z);
    ellipse(xCoord, yCoord, 80, 80); 
    if (yCoord < 920){
        yCoord = yCoord + 1;
    }else{
        yCoord = yCoord--;
    }
    if (xCoord < 920){
        xCoord = xCoord + 1
    }else {
        xCoord = xCoord - 1
    }

}

