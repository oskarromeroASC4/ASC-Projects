
function setup(){
    //to make background
    createCanvas(500,500);
    background(225);
    //have to make sure the qualities go before the actually shape
    //the color will remain the same throughout the code
    fill("yellow");
    ellipse(width / 2, height / 2, 375);
    fill('black');
    strokeWeight(10);
    line(90, 160, 410, 160);
    line(160, 350, 340, 350);
    rect(120, 160, 110, 65);
    rect(270, 160, 110, 65);
}

function mousePressed(){
    console.log("The mouse is at this x :" + mouseX + ".");
    console.log("The mouse is at this y:" + mouseY + ".");
}