function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }
let playerPoints = 0;
let computerPoints = 0;
let playerHand = '';
let gamesPlayed = 0;
let gamesTie = 0;
let textResult = document.querySelector('#result');
textResult.textContent = 'Choose a hand!';
let textPlayer = document.querySelector('#player');
let textComputer = document.querySelector('#computer');
let textTie = document.querySelector('#tie');
let textGames = document.querySelector('#games');
let h1 = document.querySelector('h1');

let button = document.querySelectorAll('button');
button.forEach((asd) => {
    asd.addEventListener('click', choose);
});

function choose() {
playerHand = this.value;
console.log(playerHand);
h1.textContent = playerHand.toUpperCase();
h1.classList.add('playing');
setTimeout(game, 1500);

}

function game() {
        function computerPlay() {
        let hands = ['Rock','Paper','Scissor'];
        let rndm = hands[Math.floor(Math.random() * (hands.length))];
        return rndm.toLowerCase();
        }

        let computerSelection = computerPlay();
        let playerSelection = playerHand.toLowerCase();
        let playerCapital = playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase();
        let computerCapital = computerSelection.slice(0,1).toUpperCase() + computerSelection.slice(1).toLowerCase();
        
        
        
        function playRound(playerSelection, computerSelection) {

            if ((playerSelection === 'rock' && computerSelection === 'scissor') || 
                (playerSelection === 'paper' && computerSelection === 'rock') ||
                (playerSelection === 'scissor' && computerSelection === 'paper'))
                {
                playerPoints++;
                return `You won! ${playerCapital} beats ${computerCapital}.`;
                }
            else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
                (playerSelection === 'paper' && computerSelection === 'scissor') ||
                (playerSelection === 'scissor' && computerSelection === 'rock'))
                {
                computerPoints++;
                return `You lose! ${computerCapital} beats ${playerCapital}.`;
                }
            else if ((playerSelection === 'rock' && computerSelection === 'rock') ||
            (playerSelection === 'paper' && computerSelection === 'paper') ||
            (playerSelection === 'scissor' && computerSelection === 'scissor'))
            {
            gamesTie++;
            return `It\'s a tie! ${computerCapital} equals ${playerCapital}.`;
            }
        else {return 'You should enter rock/paper/scissor!';}    
    }
gamesPlayed += 1;

textResult.textContent = playRound(playerSelection, computerSelection);
h1.textContent = (`${playerSelection} vs ${computerSelection}`).toUpperCase();
textPlayer.textContent = 'Player score: ' + playerPoints; 
textComputer.textContent = 'Computer score: ' + computerPoints; 
textTie.textContent = 'Tied games: ' + gamesTie;
textGames.textContent = 'Total games played: ' + gamesPlayed;

    
} 
