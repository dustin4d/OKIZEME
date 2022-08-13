//Initialize player and CPU score
let playerScore= 0;
let cpuScore = 0;

// 4. Three buttons with eventListeners that call playRound w/ correct playerChoice
// Can also use document.getElementById, but query selector covers more bases
const btnRock = document.querySelector('#btn-rock')
const btnPaper = document.querySelector('#btn-paper')
const btnScissors = document.querySelector('#btn-scissors')
const playerScorecard = document.querySelector('.player-score')
const cpuScorecard = document.querySelector('.cpu-score')

// Give the buttons the eventlisteners that will play the game
btnRock.addEventListener('click', () => clicked('Rock 🤜🏻'));
btnPaper.addEventListener('click', () => clicked('Paper ✋🏻'));
btnScissors.addEventListener('click', () => clicked('Scissors ✌🏻'));


const getRandomChoice = () => {
    let random = Math.floor(Math.random() * 3)
    switch (random) {
        case 0 :
            return 'Rock 🤜🏻'
        case 1 :
            return 'Paper ✋🏻'
        case 2 : 
            return 'Scissors ✌🏻'
    }
}

function playRound(playerChoice, cpuChoice) {
    if(cpuChoice == playerChoice){
        return("Tie match!");
    }
    // Use bitwise OR operator to test playerChoice's values against cpuChoice()'s values.
    else if (
        (playerChoice == 'Rock') && (cpuChoice == 'Scissors') ||
        (playerChoice == 'Scissors') && (cpuChoice == 'Paper') ||
        (playerChoice == 'Paper') && (cpuChoice == 'Rock')
    ) {
        playerScore++;
        return(`Player wins, using ${playerChoice}.`);
    }
    else if (
        (cpuChoice == 'Rock') && (playerChoice == 'Scissors') ||
        (cpuChoice == 'Scissors') && (playerChoice == 'Paper') ||
        (cpuChoice == 'Paper') && (playerChoice == 'Rock')
    ) {
        cpuScore++;
        return(`CPU wins using ${cpuChoice}.`);
    }
    else {
        return "Invalid input.";
    }
}

// Returns true or false when the game is over.
const isGameOver = () => {
    return playerScore === 5 || cpuScore === 5;
}

/* Most of the game is 'played' from this button click, so we'll
   put all of our functions in there that get called when a button
   is clicked */
function clicked(playerChoice) {
    cpuChoice = getRandomChoice();
    playRound(playerChoice, cpuChoice);
    console.log(playerChoice, cpuChoice);
}