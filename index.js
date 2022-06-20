let playerChoiceScore = 0;
let cpuChoiceScore = 0;

// Store all possible choices
const choices = ['Rock', 'Paper', 'Scissors'];

// Give player a random choice between the 3.
const playerChoice = choices[Math.floor(Math.random() * 3)];

// CPU randomly chooses Rock, paper, or scissors.
const computerPlay = () => {
    const cpuChoice = choices[Math.floor(Math.random() * 3)];
    return cpuChoice;
}

const playRound = (cpuChoice, playerChoice) => {

    // Determine winner and add points to player's score.
    if(playerChoice === cpuChoice){
        console.log("Tie match, go again.");
    }
    // Use bitwise OR operator to test playerChoice's values against cpuChoice's values.
    else if (
        (playerChoice == 'Rock') && (cpuChoice == 'Scissors') ||
        (playerChoice == 'Scissors') && (cpuChoice == 'Paper') ||
        (playerChoice == 'Paper') && (cpuChoice == 'Rock')
    ) {
        playerChoiceScore++;
        console.log("Player 1 wins.")
    }
    else if (
        (cpuChoice == 'Rock') && (playerChoice == 'Scissors') ||
        (cpuChoice == 'Scissors') && (playerChoice == 'Paper') ||
        (cpuChoice == 'Paper') && (playerChoice == 'Rock')
    ) {
        cpuChoiceScore++;
        console.log("Player 2 wins.");
    }
}

console.log(computerPlay());