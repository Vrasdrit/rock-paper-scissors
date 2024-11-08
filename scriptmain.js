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
const buttons = document.querySelectorAll(".btn");
const result = document.querySelector(".result");
const current = document.querySelector(".current");
const endgame = document.querySelector(".endgame")
let buttonChoice = "";
let randomChoice = "";

function playRound(humanChoice, computerChoice){
    if(humanChoice=="rock" && computerChoice=="scissors"){
        humanScore += 1;
        current.textContent = "You win! Rock beat scissors!";
    }
    else if(humanChoice=="rock" && computerChoice=="paper"){
        current.textContent = "You lost! Rock lost to paper!";
        computerScore += 1;
    }
    else if(humanChoice=="paper" && computerChoice=="rock"){
        current.textContent = "You win! Paper beat rock!";
        humanScore += 1;
    }
    else if(humanChoice=="paper" && computerChoice=="scissors"){
        current.textContent = "You lost! Paper lost to scissors!";
        computerScore += 1;
    }
    else if(humanChoice=="scissors" && computerChoice=="rock"){
        current.textContent = "You lost! Scissors lost to rock!";
        computerScore += 1;
    }
    else if(humanChoice=="scissors" && computerChoice=="paper"){
        current.textContent = "You win! Scissors beat paper!";
        humanScore += 1;
    }
    else{
        current.textContent = "It is a draw! No change in the score"
    }

    if(humanScore == 5 || computerScore == 5){
        endGame();
    }
}

function endGame(){
    if(humanScore == 5){
        endgame.textContent = "Congrats! You win the game!"
    }
    else{
        endgame.textContent = "Sorry but you lose!"
    }
    buttons.forEach(button => button.disabled = true);
    const replayButton = document.createElement("button");
    replayButton.classList.add("reply-btn")
    endgame.append(replayButton);
    replayButton.textContent = "Want to play again?"
    replayButton.addEventListener("click", replayGame);
}

function replayGame(){
    humanScore = 0;
    computerScore = 0;
    result.textContent = "";
    current.textContent = "";
    endgame.textContent = "";
    buttons.forEach(button => button.disabled = false);
    const replayButton = document.querySelector(".reply-btn");
}

buttons.forEach(button => {
    button.addEventListener("click", function(event){
        buttonChoice = event.target.textContent.trim().toLowerCase();
        randomChoice = getComputerChoice();
        playRound(buttonChoice, randomChoice);
        result.textContent = "You:" + humanScore + " vs Computer:" +computerScore;
    })
})
