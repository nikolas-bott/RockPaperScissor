function getComputerChoice(){
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";
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

console.log(getComputerChoice());