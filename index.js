//Initialize player and CPU score
let playerScore= 0;
let cpuScore = 0;

// Store all possible choices
const choices = ['Rock', 'Paper', 'Scissors'];

// Give player a random choice between the 3.
const playerChoice = choices[Math.floor(Math.random() * 3)];
// Or, give the player the option to choose.
// const playerChoice = userInput.toUppercase;
console.log(`PLAYER is: ${playerChoice}`);

// CPU randomly chooses Rock, paper, or scissors.
const computerPlay = () => {
    return choices[Math.floor(Math.random() * 3)];
}

// Save the returned value as a variable, so we dont generate a random outcome for every time
// we use the computerPlay() function.
const cpuChoice = computerPlay();
console.log(`CPU is: ${cpuChoice}`);

const playRound = (cpuDraw, playerDraw) => {
    cpuDraw = cpuChoice;
    playerDraw = playerChoice;
    // Determine winner and add points to player's score.
    if(cpuDraw == playerDraw){
        return("Tie match, go again.");
    }
    // Use bitwise OR operator to test playerChoice's values against cpuChoice()'s values.
    else if (
        (playerDraw == 'Rock') && (cpuDraw == 'Scissors') ||
        (playerDraw == 'Scissors') && (cpuDraw == 'Paper') ||
        (playerDraw == 'Paper') && (cpuDraw == 'Rock')
    ) {
        playerScore++;
        return(`Player wins, using ${playerChoice}.`);
    }
    else if (
        (cpuDraw == 'Rock') && (playerDraw == 'Scissors') ||
        (cpuDraw == 'Scissors') && (playerDraw == 'Paper') ||
        (cpuDraw == 'Paper') && (playerDraw == 'Rock')
    ) {
        cpuScore++;
        return(`CPU wins using ${cpuChoice}.`);
    }
    else {
        return "Invalid input.";
    }
}

console.log(playRound());
console.log("########################");