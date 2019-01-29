// Global Variables
 var wordBank = ['corgi', 'pitbull', 'husky'];
 var wins = 0;
 var loss = 0;
 var wrongLetter = [];
 var guessesLeft = 9;
 var underscores = [];
 var userGuesses = []
 var randWord; 


// Function

function startGame() {
    //picks random word
    console.log(wordBank [1]);
    randWord = wordBank[Math.floor(Math.random() * wordBank.length)].split("");
    console.log ('random Word = ' + randWord)
    for(var i = 0; i < randWord.length; i++)
    {
            underscores.push('_');
    }
    // printing underscores to the screen
    document.getElementById('word-blanks').textContent = underscores.join(" ");
    console.log(underscores)
    
    //reset
    wrongLetter = [];
    guessesLeft = 9;

        // html
    document.getElementById('guesses-left').textContent = guessesLeft;

}
function winLose()
// If guess right letter, show correct letter
// If guess wrong, guesses remaining goes down 1

///////////// Attempted to write another for loop to search for correct letter- failed.
/////////// Console shows that guesses go down as non matching letter is guessed, but can't complete code.
{
 
}
// User Guessses
document.onkeyup = function(event)
{
    userGuesses = event.key;
    console.log(randWord);

    // checking if the letter exist inside the word
    if (randWord.indexOf(userGuesses) > -1)
    {
        for(var i = 0; i < randWord.length; i++)
        {
            if(randWord[i] === userGuesses)
            {
            underscores[i] = userGuesses;
            console.log(underscores);
            }
            else {
                console.log(" ");
            }
        }
    }
    else
    {
    wrongLetter.push(userGuesses);
    guessesLeft--;
    console.log(guessesLeft);
    console.log(wrongLetter);
    }
}
    // code I tried to make work from office hours/classmate to let correct letter stay visible (show) on screen if guessed correctly. 

    // const checkC= function(item);
//     for(let i=0; i< wordbox[0].length;i++){
//         for(x=0;x<clicked.length;x++){
//             if(clicked.[x]===wordBank[0][i]){
//                 helements[i].setAttribute("class","show")
 

// Game ends, restart
// game restarts as page is refreshed, could not get reset code to we loop after loss/win
startGame();
