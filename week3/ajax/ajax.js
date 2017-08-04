//Application ID: ea252520
//Application keys: ef2112f4ac727663d1ee4c35cb260a80

var id = "ea252520";
var key = "ef2112f4ac727663d1ee4c35cb260a80";

var foodURL = "https://api.nutritionix.com/v1_1/search/big%20mac?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId="
                +id+"&appKey="+ key;

$.ajax({
    url: foodURL,
    success: function(data){
        //console.log(data);
        var food = data.hits[0];
        var name = food.fields.item_name;
        var cals = food.fields.nf_calories;

        $("body").append("<h2>This " + name + " has " + cals + " kcal!!</h2>");
    }
});