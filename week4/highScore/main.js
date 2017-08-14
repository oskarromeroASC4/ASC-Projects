var database = firebase.database().ref();
function updateDB(){
    var name = $("#name").val();
    console.log(name + ": " + score);
    var value = {
        NAME: name,
        SCORE: score
        
    }
    database.push(value);
}

database.on("child_added", function(rowData){
    var row = rowData.val();
    var name = row.NAME;
    var score = row.SCORE;
    var fulltext =" <p>" + name + ": " + message + "</p>";
    $(".allMessages").append(fullText);
})


var items = ["Rock", "Paper", "Scissors"];
x = Math.floor(Math.random()*2);
var score = 0;


$("#rock").click(function(){
    if(x == 0){
       $(".notes").prepend("<p>Computer Choice: Rock <br>You are tied</p>");
   }else if(x == 1){
        $(".notes").prepend("<p>Computer Choice: Paper <br>You lost</p>");
   }else{
        $(".notes").prepend("<p>Computer Choice: Scissors <br>You won</p>");
        score = score + 1
        $("#score").text( score );
   }
   x = Math.floor(Math.random()*3);
});

$("#paper").click(function(){

    if(x == 0){
        $(".notes").prepend("<p>Computer Choice: Rock <br> You won</p>");
        score = score + 1
        $("#score").text( score );
   }else if(x == 1){
        $(".notes").prepend("<p>Computer Choice: Paper <br>You are tied</p>");
   }else{
        $(".notes").prepend("<p>Computer Choice: Scissors <br>You lost</p>");
   }
   x = Math.floor(Math.random()*3);
});

$("#scissors").click(function(){
   
    if(x == 0){
        $(".notes").prepend("<p>Computer Choice: Rock <br>You lost");
   }else if(x == 1){
        $(".notes").prepend("<p>Computer Choice: Paper <br>You won</p>");
        score = score + 1
        $("#score").text( score );
   }else{
        $(".notes").prepend("<p>Computer Choice: Scissors <br>You are tied</p>");
   }
   x = Math.floor(Math.random()*3);
});

