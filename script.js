//Rock Paper Scissors project
//Completed as part of the Odin Project Foundations course

let moves = ["rock","paper","scissors"];

function getComputerChoice(array) {
    let i = Math.floor(Math.random() * array.length);
    return array[i]
};

function getHumanChoice() {
    return prompt("Rock, Paper, Scissors...SHOOT!").trim().toLowerCase();
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        
            const humanChoice = getHumanChoice();
            const computerChoice = getComputerChoice(moves);

                if (humanChoice === "rock" && computerChoice === "scissors") {
                    console.log("You win! Rock beats scissors!");
                    humanScore += 1;
                } else if (humanChoice === "rock" && computerChoice === "paper") {
                    console.log("You lose! Paper beats rock!");
                    computerScore += 1;
                }
                
                else if (humanChoice === "scissors" && computerChoice === "paper") {
                    console.log("You win! Scissors beats paper!");
                    humanScore += 1;
                } else if (humanChoice === "scissors" && computerChoice === "rock") {
                    console.log("You lose! Rock beats scissors!");
                    computerScore += 1
                } 
                
                else if (humanChoice === "paper" && computerChoice === "rock") {
                    console.log("You win! Paper beats rock!");
                    humanScore += 1;
                } else if (humanChoice === "paper" && computerChoice === "scissors") {
                    console.log("You lose! Paper beats scissors!");
                    computerScore += 1

                } else {
                    console.log("Tie! Play again!");
                };

                
            };
                console.log("Human Score is: " + humanScore);
                console.log("Computer Score is: " + computerScore);
                
                if (humanScore > computerScore) {
                    console.log("You Win!");
                    } else if (humanScore < computerScore) {
                        console.log("You lose!");
                    } else {
                        console.log("Tie!");
                    }
}

playGame();
