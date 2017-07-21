function Pokemon(name, hp, attack1, attack2){
    this.name = name;
    this.hp = hp;
    this.attack1 = attack1;
    this.attack2 = attack2;
}
var Onix = new Pokemon('Onix', 180, 40, 100);
var Charmander = new Pokemon('Charmander', 188, 40, 100);


function setup(){
    createCanvas(500, 500);
    background("black");
    //Charmander square
    fill('red');
    rect(50, 330, 60, 60);
    //Charmander title and hp label
    fill(255);
    text('HP:', 150, 348, 100, 100);
    text('Charmander', 48, 310, 100, 100);
    //Onix square
    fill('red');
    rect(380, 80, 60, 60 );
    //Onix title and hp label
    fill(255);
    text('HP:', 90, 99, 100, 100);
    text('Onix', 395, 60, 100, 100);
}
function draw(){
    //Attack 1 and 2 buttons
    fill('red');
    rect(10, 440, 230, 50);
    rect(260, 440, 230, 50);
    //Attack 1 and 2 labels
    fill(255);
    text('Attack 1', 100, 460, 100, 100);
    text('Attack 2', 350, 460, 100, 100);
    fill('green');
    rect(180, 350, Onix.hp , 10);
    rect(120, 100, Charmander.hp, 10); 
}

function mouseClicked(){
    //Attack 1 button function
    if(mouseX >= 20 && mouseX <=240 && mouseY >= 440 && mouseY <= 490){
        background('black');
        fill('green');
        rect(180, 350, Onix.hp , 10);
        num = random([0], [140]);
        Onix.hp =Onix.hp - num;
        Charmander.hp = Charmander.hp - Onix.attack1;
        rect(120, 100, Charmander.hp, 10);  
    }
    //Attack 2 button function
    if(mouseX >= 260 && mouseX <=490 && mouseY >= 440 && mouseY <= 490){
        background('black');
        fill('green');
        rect(180, 350, Onix.hp , 10);
        num = random([0], [140]);
        Onix.hp =Onix.hp - num;
        Charmander.hp = Charmander.hp - Onix.attack2;
        rect(120, 100, Charmander.hp, 10);  
    }
    //Onix Square
    fill('red');
    rect(50, 330, 60, 60);
    //Onix title and hp label
    fill(255);
    text('HP:', 150, 348, 100, 100);
    text('Charmander', 48, 310, 100, 100);
    //Onix square
    fill('red');
    rect(380, 80, 60, 60 );
    //Onix title and hp label
    fill(255);
    text('HP:', 90, 99, 100, 100);
    text('Onix', 395, 60, 100, 100);
}