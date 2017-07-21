var grid = [ [], [], [], [], [], [], [], [] ];
var x = 10;
var y = 10;

function setup(){
    createCanvas(425, 425);
    background('gray');
    fill('white');
    for(i = 0; i < grid.length; i++){
        for(j = 0; j < grid.length; j++){
            rect(x, y, 50, 50);
            x = x + 50;
        }
    x = 10
    y = y + 50
}
}
    


