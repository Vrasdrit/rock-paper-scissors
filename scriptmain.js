function getComputerChoice(){
    let x = Math.floor(Math.random()*3);
    if(x==0){
        return x = "rock";
    }
    else if(x==1){
        return x = "paper";
    }
    else{
        return x = "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice=="rock" && computerChoice=="scissors"){
        console.log("You win! Rock beat scissors!");
        humanScore += 1;
        console.log("You:" + humanScore + " vs Computer:" +computerScore);

    }
    else if(humanChoice=="rock" && computerChoice=="paper"){
        console.log("You lost! Rock lost to paper!");
        computerScore += 1;
        console.log("You:" + humanScore + " vs Computer:" +computerScore);
    }
    else if(humanChoice=="paper" && computerChoice=="rock"){
        console.log("You win! Paper beat rock!");
        humanScore += 1;
        console.log("You:" + humanScore + " vs Computer:" +computerScore);
    }
    else if(humanChoice=="paper" && computerChoice=="scissors"){
        console.log("You lost! Paper lost to scissors!");
        computerScore += 1;
        console.log("You:" + humanScore + " vs Computer:" +computerScore);
    }
    else if(humanChoice=="scissors" && computerChoice=="rock"){
        console.log("You lost! Scissors lost to rock!");
        computerScore += 1;
        console.log("You:" + humanScore + " vs Computer:" +computerScore);
    }
    else if(humanChoice=="scissors" && computerChoice=="paper"){
        console.log("You win! Scissors beat paper!");
        humanScore += 1;
        console.log("You:" + humanScore + " vs Computer:" +computerScore);
    }
    else{
        console.log("It is a draw! No change in the score")
        console.log("You:" + humanScore + " vs Computer:" +computerScore);
    }
}

const buttons = document.querySelectorAll(".btn");
let buttonChoice = "";
let randomChoice = "";

buttons.forEach(button => {
    button.addEventListener("click", function(event){
        buttonChoice = event.target.textContent.trim().toLowerCase();
        randomChoice = getComputerChoice();
        playRound(buttonChoice, randomChoice);
    })
})


/*function getHumanChoice(){
    let y = prompt("What is your play?");
    
    y = String(y).toLowerCase();

    if(y=="rock"){
        return y = "rock";
    }
    else if(y=="paper"){
        return y = "paper";
    }
    else{
        return y = "scissors";
    }
}

for(let i=0; i<5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
}


console.log("Game finished!");
*/
