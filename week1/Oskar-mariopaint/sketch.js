function setup(){
    createCanvas(500, 500);
    background('gray');
}

function mouseDragged(){  
    fill(random([0], [255]), random([0], [255]), random([0], [255]));
    rect(random([0],[500]), 
             random([0], [500]), 
             random([200], [500]), 
             random([200], [500]));
}

}


