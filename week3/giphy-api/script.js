var giphyURL = "https://api.giphy.com/v1/gifs/search?api_key=4630bafdc5374785848bb731a28373bf&q=pokemon&limit=25&offset=0&rating=G&lang=en"

$.get(giphyURL, function(data){
    console.log(data);
})