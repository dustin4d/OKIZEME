//Initialize player and CPU score
let playerChoiceScore = 0;
let cpuScore = 0;

// Store all possible choices
const choices = ['Rock', 'Paper', 'Scissors'];

// Give player a random choice between the 3.
const playerChoice = choices[Math.floor(Math.random() * 3)];
console.log(`PLAYER is: ${playerChoice}`);

// CPU randomly chooses Rock, paper, or scissors.
const computerPlay = () => {
    return choices[Math.floor(Math.random() * 3)];
}

// Save the returned value as a variable, so we dont generate a random outcome for every time
// we use the computerPlay() function.
const cpuChoice = computerPlay();
console.log(`CPU is: ${cpuChoice}`);

const playRound = (cpuChoice, playerChoice) => {
    // Determine winner and add points to player's score.
    if(cpuChoice == playerChoice){
        return("Tie match, go again.");
    }
    // Use bitwise OR operator to test playerChoice's values against cpuChoice()'s values.
    else if (
        (playerChoice == 'Rock') && (cpuChoice == 'Scissors') ||
        (playerChoice == 'Scissors') && (cpuChoice == 'Paper') ||
        (playerChoice == 'Paper') && (cpuChoice == 'Rock')
    ) {
        playerChoiceScore++;
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
}