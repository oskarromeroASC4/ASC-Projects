var alphabet = ["A", "B", "C", "D", 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 

function randLetter(){
    number = Math.floor(Math.random() * 26)
    console.log(alphabet[number]) 
}
alphabet[randLetter()]

