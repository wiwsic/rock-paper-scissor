/* 

Pseudo-Code

Welcome the User to the Rock-Paper-Scissor Page/Game;
Ask if User Want to Play;
If User hit Cancel prompt "Ok, see you next time!";
If User hit Ok, The program ask it name;
If User hit Cancel, the program prompt "Ok, see you next time!";
If User hit Ok, the program keep the name in a variable;
Ask user to type "rock","paper" or "scissors", saving the result in userChoice;
If user type the word wrongly, the Programs ask again;
Convert the user response to lowCase;
machineChoice will randomly choice between "rock","paper" or "scissors";
Program will take the two responses, compare and result the winner;



*/


// Welcome the User to the Rock-Paper-Scissor Page/Game; Ask if User Want to Play;

let wannaPlay = confirm('Welcome to the Rock-Paper-Scissors game!, do you want to play?');

// If User hit Cancel prompt "Ok, see you next time!";
// If User hit Ok, The program ask it name;

let playerName;

if (!(wannaPlay)) {

    alert('Ok, see you next time!');

} else {

    playerName = prompt("What's your name?","");
    if (!(playerName)){

        alert('No name inserted, see you next time!');

    }

}

