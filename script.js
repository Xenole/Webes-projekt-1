var you;
var yourScore = 0;
var computer;
var computerScore = 0;

var choices = ["ROCK","PAPER","SCISSORS"];

window.onload = function() {
    for(let i = 0; i < 3; i++){
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click",selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function selectChoice(){
    you = this.id;

    computer = choices[Math.floor(Math.random() * 3)];

    if (you == computer) {
        yourScore = yourScore;
        computerScore = computerScore;
        document.getElementById("result").innerText = you + " equals " + computer + ". It's a draw.";
    }
    else{
        if(you == "ROCK") {
            if(computer == "SCISSORS"){
                yourScore += 1;
                document.getElementById("result").innerText = you + " beats " + computer + ". You win."; 
            }
            else if(computer == "PAPER"){
                computerScore += 1;
                document.getElementById("result").innerText = you + " loses to " + computer + ". You lost."; 
            }
        }
        else if(you == "SCISSORS") {
            if(computer == "PAPER"){
                yourScore += 1;
                document.getElementById("result").innerText = you + " beats " + computer + ". You win."; 
            }
            else if(computer == "ROCK"){
                computerScore += 1;
                document.getElementById("result").innerText = you + " loses to " + computer + ". You lost."; 
            }
        }
        else if(you == "PAPER") {
            if(computer == "ROCK"){
                yourScore += 1;
                document.getElementById("result").innerText = you + " beats " + computer + ". You win."; 
            }
            else if(computer == "SCISSORS"){
                computerScore += 1;
                document.getElementById("result").innerText = you + " loses to " + computer + ". You lost."; 
            }
        }
    }

    document.getElementById("your-score").innerText = yourScore;
    document.getElementById("computer-score").innerText = computerScore;

}