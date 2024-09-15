const rock = "rock";
const paper = "paper";
const scissors = "scissors";

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
    let choice = prompt('Choose between "Rock" - or "1" | "Scissors" - or "3" | "Paper" - or "3"')

    choice.toLowerCase();

        switch(choice){
            case "rock":
            case "1":
                console.log();
                return rock;
            case "scissors":
            case "2":
                return scissors;
            case "paper":
            case "3":
                return paper;
        }
        alert("You have to input a number between 1 and 3. or one of these strings: rock, paper, scissors");
        return getHumanChoice();
}

//console.log(getHumanChoice());

function playRound(){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    console.log("----- next_round -----");
    if(humanChoice == computerChoice){
        console.log("Draw. - There's no winner!");
        return("none");
    }else if(humanChoice == scissors){
        switch(computerChoice){
            case rock: 
                console.log("You lose! Rock beats Scissors!");
                return("computer");
            case paper: 
                console.log("You won! Scissors bets Paper!");
                return("human");
        }
    }else if(humanChoice == paper){
        switch(computerChoice){
            case rock: 
                console.log("You won! Paper beats rock!");
                return("human");
            case scissors:
                console.log("You lose! Scissors beats Paper!");
                return("computer");
        }
    }else if(humanChoice == rock){
        switch(computerChoice){
            case paper:
                console.log("You loose! Paper beats rock!");
                return("computer");
            case scissors: 
                console.log("You won! Rock beats scissors!");
                return("human");
        }
    }
}

//console.log(playRound());

function playGame(numberOfRounds){
    let humanScore = 0;
    let computerScore = 0;
    let rounds = 0;

    for(let i = 0;i<numberOfRounds;i++){
        let winner = playRound();
        
        if(winner == "human"){
            humanScore++;
        }else if(winner == "computer"){
            computerScore++;
        }
        rounds = i;
    }
    return "Your Score is "+humanScore+". The Score of the computer is "+computerScore +
    ". You played a total of "+ numberOfRounds +" rounds!";
}

console.log(playGame(5))