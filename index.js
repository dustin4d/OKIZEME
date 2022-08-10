//Initialize player and CPU score
let playerScore= 0;
let cpuScore = 0;

// Store all possible choices
const choices = ['Rock', 'Paper', 'Scissors'];

// Globally scoped cpu choice so it can go into any function
const cpuChoice = choices[Math.floor(Math.random() * 3)];

const playRound = (playerChoice) => {
    // Determine winner and add points to player's score.
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

// 4. Three buttons with eventListeners that call playRound w/ correct playerChoice
// Can also use document.getElementById, but query selector covers more bases
const btnRock = document.querySelector('#btn-rock')
const btnPaper = document.querySelector('#btn-paper')
const btnScissors = document.querySelector('#btn-scissors')

btnRock.addEventListener('click', () => clicked('ROCK 🤜🏻'));
btnPaper.addEventListener('click', () => clicked('PAPER ✋🏻'));
btnScissors.addEventListener('click', () => clicked('SCISSORS ✌🏻'));

// Need multiple things to be done when the button is pressed, and writing all of it
// in the addEventListener line would be... sloppy and make me uncomfortable, so
// we'll need to write a function that we can pass as the second arg for the click.
function clicked(playerChoice) {
    console.log(playerChoice);
}


/* 3. remove 5 round logic
const game = () => {
    for (let i = 0; i < 5; i++) {
        console.log(`### GAME ${i+1} ###`);
        console.log(`${playRound()}`);
        console.log(`Player Score: ${playerScore}   CPU Score: ${cpuScore}\n`);
    
    if (playerScore > cpuScore) {
        console.log(`Player wins! ${playerScore} to CPU ${cpuScore}.`);
    } else if (cpuScore > playerScore) {
       console.log(`CPU wins! ${cpuScore} to Player's ${playerScore}.`);
    } else {
        console.log("Damn, tie match.");
        }
    }
}
*/
// game();