//Rock Paper Scissors project
//Completed as part of the Odin Project Foundations course
let rockBtn = document.createElement("button");
let paperBtn = document.createElement("button");
let scissorsBtn = document.createElement("button");
let display = document.createElement("div");
let result = document.createElement("div");
let score = document.createElement("div");
let body = document.querySelector("body");

rockBtn.textContent = "rock";
paperBtn.textContent = "paper";
scissorsBtn.textContent = "scissors";

body.append(display)
display.append(rockBtn, paperBtn, scissorsBtn, result, score);

rockBtn.addEventListener('click', () => playRound("rock"));
paperBtn.addEventListener('click', () => playRound("paper"));
scissorsBtn.addEventListener('click', ()=> playRound("scissors"));



let moves = ["rock","paper","scissors"];

function getComputerChoice(array) {
    let i = Math.floor(Math.random() * array.length);
    return array[i]
};
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
    

        const computerChoice = getComputerChoice(moves);

            if (humanChoice === "rock" && computerChoice === "scissors") {
                result.textContent = "You win! Rock beats scissors!";
                humanScore+=1;
                score.textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;
            } else if (humanChoice === "rock" && computerChoice === "paper") {
                result.textContent = "You lose! Paper beats rock!";
                computerScore+=1;
                score.textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;
            }
            
            else if (humanChoice === "scissors" && computerChoice === "paper") {
                result.textContent = "You win! Scissors beats paper!";
                humanScore+=1;
                score.textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;
            } else if (humanChoice === "scissors" && computerChoice === "rock") {
                result.textContent = "You lose! Rock beats scissors!";
                computerScore += 1;
                score.textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;
            } 
            
            else if (humanChoice === "paper" && computerChoice === "rock") {
                result.textContent = "You win! Paper beats rock!";
                humanScore+=1;
                score.textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;
            } else if (humanChoice === "paper" && computerChoice === "scissors") {
                result.textContent = "You lose! Paper beats scissors!";
                computerScore += 1;
                score.textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;

            } else {
                result.textContent ="Tie! Play again!";
            };

            if (humanScore === 5 || computerScore ===5) {
                rockBtn.disabled =true;
                paperBtn.disabled = true;
                scissorsBtn.disabled = true;

        }
    }

