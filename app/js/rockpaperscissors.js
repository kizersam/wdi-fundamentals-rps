////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var result = (move = move || getInput())
    
    return result;
}

function getComputerMove(move) {
    var result = (move = move || randomPlay())
    
    return result;
}

function getWinner(PlayerMove,ComputerMove) {

    	if (PlayerMove == 'rock') {
    		switch (ComputerMove) {
    			case 'rock':
    				return 'tie';
    				break;
    			case 'paper':
    				return 'computer';
    				break;
    			case 'scissors':
    				return 'player';
    				break;
    		};} else if (PlayerMove == 'paper') {
    		switch (ComputerMove) {
    			case 'rock':
    				return 'player';
    				break;
    			case 'paper':
    				return 'tie';
    				break;
    			case 'scissors':
    				return 'computer';
    				break;
    		};} else if (PlayerMove == 'scissors') {
    		switch (ComputerMove) {
    			case 'rock':
    				return 'computer';
    				break;
    			case 'paper':
    				return 'player';
    				break;
    			case 'scissors':
    				return 'tie';
    				break;
    		};
    	};
    	
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    	if (getWinner() == "computer") {
    		computerWins +=1}
    	else if (getWinner() == "player") {
    		playerWins +=1};
     console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  	 console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    return [playerWins, computerWins];
}
playToFive();
