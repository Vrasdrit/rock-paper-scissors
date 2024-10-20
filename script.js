function getComputerChoice(){

    let x = Math.floor(Math.random()*3);

    if(x==0){
        return console.log("Computer's move is ROCK!");
    }
    else if(x==1){
        return console.log("Computer's move is PAPER!");
    }
    else{
        return console.log("Computer's move is SCISSORS!");
    }
}

function getHumanChoice(){
    
    let y = prompt("What is your play?");

    if(y=="rock"){
        return console.log("Your move is ROCK!");
    }
    else if(y=="paper"){
        return console.log("Your move is PAPER!");
    }
    else{
        return console.log("Your move is Scissors!");
    }
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



//getComputerChoice()
//getHumanChoice()
