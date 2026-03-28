 // create a function that gets the user choice from the prompt message that will appear
 function getHumanChoice(){
    let choice = prompt("Please choose rock, paper, or scissors.");
    //returns choice with lowercase letters
    return choice.toLowerCase();
 }
 //create a function that gets the computers choice generates a random number between 0 and 2 and assigns rock, paper, or scissors to each number
 function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    // a else if conditional when computer chooses a number  from 0 - 2 each  one has a value from rock paper or scissors
    if(randomNumber === 0){
        return 'rock';
    }else if (randomNumber === 1){
        return 'paper';
    }else if (randomNumber === 2){
        return 'scissors'
    }else{
        return 'not part of the game'
    }  
 }
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    // create a function that plays a single round of rock paper scissors and takes the human choice and computer choice as arguments and determines the winner of the round and updates the score accordingly
function playRound(humanChoice,computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if( humanChoice === 'rock' && computerChoice === 'scissors'){
        console.log('You won this round!')
        humanScore++;
    }else if (humanChoice === 'paper' && computerChoice === 'rock'){
        console.log("You won this round!");
        humanScore++;
    }else if (humanChoice === 'scissors' && computerChoice === 'paper' ){
        console.log("You won this round!");
        humanScore++;
    }else if(humanChoice === 'rock' && computerChoice === 'paper'){
        console.log("You lost this round.");
        computerScore++;
    }else if(humanChoice === 'paper' && computerChoice === 'scissors'){
        console.log("You lost this round.");
        computerScore++;
    }else if( humanChoice === 'scissors' && computerChoice === 'rock'){
        console.log('You lost this round.');
        computerScore++;
    }else if( humanChoice === computerChoice){
        console.log("It's a Tie!");
    }
}
// create a function that plays a best of 5 game of rock paper scissors and keeps track of the score and declares a winner at the end   
    for(let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
        
    }
    // after 5 rounds the function will compare the human score and computer score and declare a winner or a tie  or a loss for the human player 
    if(humanScore > computerScore){
        console.log(`Congratulations! You won the game with a score of ${humanScore} to ${computerScore}.`);
    }else if(computerScore > humanScore){
        console.log(`Sorry, you lost the game with a score of ${humanScore} to ${computerScore}.`);
    }else{
        console.log(`The game is a tie with a score of ${humanScore} to ${computerScore}.`);

    }
}
// call the play game function to start the game
playGame();
