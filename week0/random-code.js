var mashArray = ["Peach's Castle", "Dream Land", "Temple", "Final Destination"];

function battleStage(stage){
    var stage = Math.floor(Math.random() * 4)
    mashArray = mashArray[stage];
    console.log(mashArray);
}
battleStage();

