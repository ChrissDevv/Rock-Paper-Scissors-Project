  
    let humanScore = 0;
    let computerScore = 0;

  //create a function that gets the computers choice generates a random number between 0 and 2 and assigns rock, paper, or scissors to each number
 function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    
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
function playRound(humanChoice,computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if( humanChoice === 'rock' && computerChoice === 'scissors'){
        document.querySelector('#result').textContent = 'You won this round!'
        humanScore++
        document.querySelector('#score').textContent = `Human ${humanScore} | Computer ${computerScore}`;
    }else if (humanChoice === 'paper' && computerChoice === 'rock'){
        document.querySelector('#result').textContent = 'You won this round!'
        humanScore++
         document.querySelector('#score').textContent = `Human ${humanScore} | Computer ${computerScore}`;
    }else if (humanChoice === 'scissors' && computerChoice === 'paper' ){
        document.querySelector('#result').textContent = 'You won this round!'
        humanScore++
         document.querySelector('#score').textContent = `Human ${humanScore} | Computer ${computerScore}`;
    }else if(humanChoice === 'rock' && computerChoice === 'paper'){
        document.querySelector('#result').textContent = 'You lost this round!'
        computerScore++
         document.querySelector('#score').textContent = `Human ${humanScore} | Computer ${computerScore}`;
    }else if(humanChoice === 'paper' && computerChoice === 'scissors'){
        document.querySelector('#result').textContent = 'You lost this round!'
        computerScore++
         document.querySelector('#score').textContent = `Human ${humanScore} | Computer ${computerScore}`;
    }else if( humanChoice === 'scissors' && computerChoice === 'rock'){
        document.querySelector('#result').textContent = 'You lost this round!';
        computerScore++
         document.querySelector('#score').textContent = `Human ${humanScore} | Computer ${computerScore}`;
    }else if( humanChoice === computerChoice){
        document.querySelector('#result').textContent = 'It is a tie -_-';
         document.querySelector('#score').textContent = `Human ${humanScore} | Computer ${computerScore}`;
    }
    if (humanScore === 5){
        document.querySelector('#result').textContent = 'You won the game';
        document.querySelector('#rock').disabled = true;
        document.querySelector('#paper').disabled = true;
        document.querySelector('#scissors').disabled = true;
    }else if (computerScore === 5){
        document.querySelector('#result').textContent = 'The computer won the game!';
        document.querySelector('#rock').disabled = true;
        document.querySelector('#paper').disabled = true;
        document.querySelector('#scissors').disabled = true;
    }
}

  document.querySelector('#rock').addEventListener('click',() =>{
    playRound('rock',getComputerChoice())
 });
  document.querySelector('#paper').addEventListener('click',()=> {
    playRound('paper',getComputerChoice())
  });
  document.querySelector('#scissors').addEventListener('click',() => {
    playRound('scissors', getComputerChoice())
  });
 
 
 
 



    
        
    
    

