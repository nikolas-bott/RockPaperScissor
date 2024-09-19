const rock = "rock";
const paper = "paper";
const scissors = "scissors";

const message = document.querySelector("#message");
const scoreH = document.querySelector("#human-score");
const scoreC = document.querySelector("#computer-score");
const displayComputerChoice = document.querySelector("#computer-choice");

let humanScore = 0;
let computerScore = 0;

let pressedButton = null;


const button = document.querySelectorAll(".button");

button.forEach(btn => {
        btn.addEventListener("click", function(e){
        pressedButton = btn.id;
        playRound();
    });
});



function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);
    
    switch(random){
        case 0: 
            return rock;
        case 1:
            return scissors;
        case 2: 
            return paper;
        default:
            return "Something went wrong with the random Number Gen";
    }
}

//console.log(getComputerChoice());

function getHumanChoice(){
        let choice = pressedButton;

        switch(choice){
            case "rock":
                return rock;
            case "scissors":
                return scissors;
            case "paper":
                return paper;
        }
        alert("You have to input a number between 1 and 3. or one of these strings: rock, paper, scissors");
        return getHumanChoice();
}

//console.log(getHumanChoice());

function playRound(){

    console.log("test");
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    console.log("----- next_round -----");
    if(humanChoice == computerChoice){
        console.log("Draw. - There's no winner!");
        message.textContent = "Draw.";
        displayComputerChoice.textContent = "The computer choose: "+humanChoice;
        
        return("none");
    }else if(humanChoice == scissors){
        switch(computerChoice){
            case rock: 
                console.log("You lose! Rock beats Scissors!");
                message.textContent = "You lose!";
                computerScore++;
                scoreC.textContent = "Computer Score: "+computerScore;
                displayComputerChoice.textContent = "The computer choose: Rock";
                return("computer");
            case paper: 
                console.log("You won! Scissors bets Paper!");
                message.textContent = "You won!";
                humanScore++;
                scoreH.textContent = "Score of Player: " + humanScore;
                displayComputerChoice.textContent = "The computer choose: Paper";
                return("human");
        }
    }else if(humanChoice == paper){
        switch(computerChoice){
            case rock: 
                console.log("You won! Paper beats rock!");
                message.textContent = "You won!";
                humanScore++;
                scoreH.textContent = "Score of Player: " +humanScore;
                displayComputerChoice.textContent = "The computer choose: Rock";
                return("human");
            case scissors:
                console.log("You lose! Scissors beats Paper!");
                message.textContent = "You lose!";
                computerScore++;
                scoreC.textContent = "Computer Score: "+computerScore;
                displayComputerChoice.textContent = "The computer choose: Scissors";
                return("computer");
        }
    }else if(humanChoice == rock){
        switch(computerChoice){
            case paper:
                console.log("You loose! Paper beats rock!");
                message.textContent = "You loose!";
                computerScore++;
                scoreC.textContent = "Computer Score: "+computerScore;
                displayComputerChoice.textContent = "The computer choose: Paper";
                return("computer");
            case scissors: 
                console.log("You won! Rock beats scissors!");
                message.textContent = "You won!";
                humanScore++;
                scoreH.textContent = "Score of Player: " +humanScore;
                displayComputerChoice.textContent = "The computer choose: Scissors";
                return("human");
        }
    }
}

//console.log(playRound());

