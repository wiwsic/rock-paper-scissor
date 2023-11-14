// Declaring global variables

let round;
let playerName;
let playerChoice;
let machineChoice;
let playerScore;
let machineScore;
const options = ['rock','paper','scissors'];

// Selection of the initial document elements

const main = document.querySelector('.main')
const newGameBtn = document.querySelector('.init');
let h1 = document.querySelector('h1');

// Event Handler that init the game

newGameBtn.addEventListener('click', () => {    
    phase0();
    main.removeChild(newGameBtn);
});

// Phase0 will add the player name

function phase0(){

    h1.textContent = 'Insert your name:';

    let nameInput = document.createElement('input');
    let submitNameBtn = document.createElement('button');
    submitNameBtn.textContent = 'Submit';
    submitNameBtn.size = 15;

    submitNameBtn.classList.add('btn');
    
    main.appendChild(nameInput);
    main.appendChild(submitNameBtn);

    submitNameBtn.addEventListener('click', () => {    
        playerName = nameInput.value;
        phase1();
        main.removeChild(nameInput);
        main.removeChild(submitNameBtn);
    })

}

// In Phase1 - Phase5 player will choose an option, the program choose the machine option
// Then calculate the winner of round, update round, player and machine score value
// Then call the next round, if the Round Counter = 5, call the end game instead.


function phase1() {

    h1.textContent = 'Round 1. Choose an option:';

    const options = document.createElement('div');
    options.classList.add('options')

    main.appendChild(options);

    const rockBtn = document.createElement('button');
    rockBtn.textContent = 'Rock';
    const paperBtn = document.createElement('button');
    paperBtn.textContent = 'Paper';
    const scissorsBtn = document.createElement('button');
    scissorsBtn.textContent = 'Scissors'

    options.appendChild(rockBtn);
    options.appendChild(paperBtn);
    options.appendChild(scissorsBtn);

    
    
}