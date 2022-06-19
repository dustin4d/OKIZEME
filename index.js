let player1Score = 0;
let player2Score = 0;

// Main function
const computerPlay = () => {
    // Show all possible choices
    const choices = ['Rock', 'Paper', 'Scissors'];
    
    // player1 random choice
    const player1 = choices[Math.floor(Math.random() * 3)];
    //player2 random choice
    const player2 = choices[Math.floor(Math.random() * 3)];
    //console.log("Choose by inputting R, P, or S. Then press enter.");

    // Determine winner and add points to player's score.
    if(player1 === player2){
        console.log("Tie match, go again.");
    }
    else if (
        (player1 == 'Rock') && (player2 == 'Scissors') ||
        (player1 == 'Scissors') && (player2 == 'Paper') ||
        (player1 == 'Paper') && (player2 == 'Rock')
    ) {
        player1Score++;
        console.log("Player 1 wins.")
    }
    else if (
        (player2 == 'Rock') && (player1 == 'Scissors') ||
        (player2 == 'Scissors') && (player1 == 'Paper') ||
        (player2 == 'Paper') && (player1 == 'Rock')
    ) {
        player2Score++;
        console.log("Player 2 wins.");
    }
}

computerPlay();
