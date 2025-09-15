// =====================
// Rock Paper Scissors Game
// =====================

// Initialize scores
let userScore = 0;
let computerScore = 0;

// Get DOM elements
const choices = document.querySelectorAll('.choice');
const msg = document.getElementById('message');
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const resetButton = document.querySelector('.reset');

// Function to get computer's random choice
const computerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3); // Random number 0–2
    return choices[randomNumber]; // Return random choice
};

// Function to play one round of the game
const playGame = (userChoice) => {
    const compChoice = computerChoice(); // Get computer choice

    // If both choices are the same it's a draw
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true; // Assume user wins

        // Game logic: decide who wins
        if (userChoice === 'rock') {
            userWin = (compChoice === 'paper') ? false : true;
        } else if (userChoice === 'paper') {
            userWin = (compChoice === 'scissors') ? false : true;
        } else if (userChoice === 'scissors') {
            userWin = (compChoice === 'rock') ? false : true;
        }

        // Show the winner
        showWinner(userWin, userChoice, compChoice);
    }
};

// Function for draw situation
const drawGame = () => {
    msg.innerText = "It's a draw! Play again.";
    msg.style.backgroundColor = "#081b31"; // Neutral color for draw
};

// Function to show winner and update score
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        msg.innerText = `You won! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScore_span.innerText = userScore; // Update score on screen
    } else {
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}.`; 
        msg.style.backgroundColor = "red";
        computerScore++;
        computerScore_span.innerText = computerScore; // Update score on screen
    }
};
// Function to reset the game
const resetGame = () => {
    userScore = 0;
    computerScore = 0;
    userScore_span.innerText = userScore;
    computerScore_span.innerText = computerScore;
    msg.innerText = "Make your move!";
    msg.style.backgroundColor = "#081b31"; // Reset to neutral color
};

// Add event listeners to all choice buttons
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const choiceId = choice.getAttribute('id'); 
        playGame(choiceId);
       

    });
});

// Add event listener to reset button
resetButton.addEventListener('click', resetGame);
