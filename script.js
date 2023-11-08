
// Welcome the User to the Rock-Paper-Scissor Page/Game; Ask if User Want to Play;

let wannaPlay = confirm('Welcome to the Rock-Paper-Scissors game!, do you want to play?');

// If User hit Cancel prompt "Ok, see you next time!";
// If User hit Ok, The program ask it name;
// If User hit Ok, the program keep the name in a variable;

let playerName;

if (!(wannaPlay)) {

    alert('Ok, see you next time!');

} else {

    playerName = prompt("What's your name?","");
    if (!(playerName)){

        alert('No name inserted, see you next time!');

    }

}


// Ask user to type "rock","paper" or "scissors", saving the result in userChoice;
// If user type the word wrongly, the Programs ask again;
// Convert the user response to lowCase;

let playerChoice = prompt('rock, paper or scissors?','');

playerChoice = playerChoice.toLowerCase();


if (!(playerChoice === 'rock' || playerChoice ===  'paper' || playerChoice ===  'scissors')) {

playerChoice = prompt('rock, paper or scissors?','');
playerChoice = playerChoice.toLowerCase();

} else {



}

// machineChoice will randomly choice between "rock","paper" or "scissors";

let options = ['rock','paper','scissors'];

let machineChoice = options[Math.floor(Math.random() * 3)];

// Program will take the two responses, compare and result the winner;

function compareResults (a,b) {

    const player = a;
    const machine = b;

    if (a === 'scissors' && b === 'scissors'){

    return 'Its a draw! You and the machine chose scissors'

    } else if (a === 'paper' && b === 'paper'){

    return 'Its a draw! You and the machine chose paper'

    } else if (a === 'rock' && b === 'rock'){

    return 'Its a draw! You and the machine chose rock'

    } else if ((a === 'scissors' || a === 'paper') && (b === 'scissors' || b === 'paper')){

        if (a === 'scissors') {

            return `Congratulations ${playerName}, you win! You chose scissors and the machine chose paper`

        } else {

            return 'You loose! You chose paper and the machine chose scissors!'

        }

    } else if ((a === 'scissors' || a === 'rock') && (b === 'scissors' || b === 'rock')){

        if (a === 'rock') {

            return `Congratulations ${playerName}, you win! You chose rock and the machine chose scissors`

        } else {

            return 'You loose! You chose scissors and the machine chose rock!'

        }

        
    } else if ((a === 'paper' || a === 'rock') && (b === 'paper' || b === 'rock')){

        if (a === 'paper') {

            return `Congratulations ${playerName}, you win! You chose paper and the machine chose rock`

        } else {

            return 'You loose! You chose rock and the machine chose paper!'

        }

    }

} 

alert(compareResults(playerChoice,machineChoice));

console.log(playerChoice);
console.log(machineChoice);


