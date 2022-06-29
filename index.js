//Initialize player and CPU score
let playerScore= 0;
let cpuScore = 0;

// Store all possible choices
const choices = ['Rock', 'Paper', 'Scissors'];

const playRound = (cpuChoice, playerChoice) => {
    // Give player a random choice between the 3.
    playerChoice = choices[Math.floor(Math.random() * 3)];

    // Give CPU a random choice of Rock, Paper, or Scissors
    cpuChoice = choices[Math.floor(Math.random() * 3)];

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

game();