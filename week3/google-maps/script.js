var locations = "Tecate";

document.getElementById("map").src="https://maps.googleapis.com/maps/api/staticmap?center="+locations+"&size=640x400&style=element:labels|visibility:off&style=element:geometry.stroke|visibility:off&style=feature:landscape|element:geometry|saturation:-100&style=feature:water|saturation:-100|invert_lightness:true&key=AIzaSyBj2-wu7TMDenBiKk-tmksgJoLaCIyaoFE";

function changeArea(){
    area=document.getElementById("newArea").value;
    document.getElementById("map").src="https://maps.googleapis.com/maps/api/staticmap?center="+locations+"&size=640x400&style=element:labels|visibility:off&style=element:geometry.stroke|visibility:off&style=feature:landscape|element:geometry|saturation:-100&style=feature:water|saturation:-100|invert_lightness:true&key=AIzaSyBj2-wu7TMDenBiKk-tmksgJoLaCIyaoFE";
}