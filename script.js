// Declaring global variables

let round;
let playerName;
let playerChoice;
let machineChoice;
let playerScore = 0;
let machineScore = 0;
const options = ['rock','paper','scissors'];

// Compare results function

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
            playerScore++
            return `Congratulations ${playerName}, you won the round! You chose scissors and the machine chose paper`

        } else {

            machineScore++
            return 'You lost the round! You chose paper and the machine chose scissors!'

        }

    } else if ((a === 'scissors' || a === 'rock') && (b === 'scissors' || b === 'rock')){

        if (a === 'rock') {

            playerScore++
            return `Congratulations ${playerName}, you won the round! You chose rock and the machine chose scissors`

        } else {

            machineScore++
            return 'You lost the round! You chose scissors and the machine chose rock!'

        }

        
    } else if ((a === 'paper' || a === 'rock') && (b === 'paper' || b === 'rock')){

        if (a === 'paper') {

            playerScore++
            return `Congratulations ${playerName}, you won the round! You chose paper and the machine chose rock`

        } else {

            machineScore++
            return 'You lost the round! You chose rock and the machine chose paper!'

        }

    }

} 

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

    playerScore = 0;
    machineScore = 0;

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
// The program also add and remove buttons


function phase1() {

    h1.textContent = 'Round 1. Choose an option:';

    const optionsSector = document.createElement('div');
    optionsSector.classList.add('options')

    main.appendChild(optionsSector);

    const rockBtn = document.createElement('button');
    rockBtn.textContent = 'Rock';
    const paperBtn = document.createElement('button');
    paperBtn.textContent = 'Paper';
    const scissorsBtn = document.createElement('button');
    scissorsBtn.textContent = 'Scissors'

    optionsSector.appendChild(rockBtn);
    optionsSector.appendChild(paperBtn);
    optionsSector.appendChild(scissorsBtn);

    rockBtn.addEventListener('click', () => {    
        playerChoice = 'rock'
        machineChoice = options[Math.floor(Math.random() * 3)];
        h1.textContent = compareResults(playerChoice,machineChoice);
        optionsSector.removeChild(rockBtn);
        optionsSector.removeChild(paperBtn);
        optionsSector.removeChild(scissorsBtn);
        main.removeChild(optionsSector);

        const nextBtn = document.createElement('button');
        nextBtn.textContent = 'Next Round'

        main.appendChild(nextBtn);

        nextBtn.addEventListener('click', () => {
        phase2();
        main.removeChild(nextBtn);
        })

        
    })

    paperBtn.addEventListener('click', () => {    
        playerChoice = 'paper'
        machineChoice = options[Math.floor(Math.random() * 3)];
        h1.textContent = compareResults(playerChoice,machineChoice);
        optionsSector.removeChild(rockBtn);
        optionsSector.removeChild(paperBtn);
        optionsSector.removeChild(scissorsBtn);
        main.removeChild(optionsSector);

        const nextBtn = document.createElement('button');
        nextBtn.textContent = 'Next Round'

        main.appendChild(nextBtn);

        nextBtn.addEventListener('click', () => {
        phase2();
        main.removeChild(nextBtn);
        })

        
    })

    scissorsBtn.addEventListener('click', () => {    
        playerChoice = 'scissors'
        machineChoice = options[Math.floor(Math.random() * 3)];
        h1.textContent = compareResults(playerChoice,machineChoice);
        optionsSector.removeChild(rockBtn);
        optionsSector.removeChild(paperBtn);
        optionsSector.removeChild(scissorsBtn);
        main.removeChild(optionsSector);

        const nextBtn = document.createElement('button');
        nextBtn.textContent = 'Next Round'

        main.appendChild(nextBtn);

        nextBtn.addEventListener('click', () => {
        phase2();
        main.removeChild(nextBtn);
        })

        
    })


    
}

function phase2() {

    h1.textContent = 'Round 2. Choose an option:';

    const optionsSector = document.createElement('div');
    optionsSector.classList.add('options')

    main.appendChild(optionsSector);

    const rockBtn = document.createElement('button');
    rockBtn.textContent = 'Rock';
    const paperBtn = document.createElement('button');
    paperBtn.textContent = 'Paper';
    const scissorsBtn = document.createElement('button');
    scissorsBtn.textContent = 'Scissors'

    optionsSector.appendChild(rockBtn);
    optionsSector.appendChild(paperBtn);
    optionsSector.appendChild(scissorsBtn);

    rockBtn.addEventListener('click', () => {    
        playerChoice = 'rock'
        machineChoice = options[Math.floor(Math.random() * 3)];
        h1.textContent = compareResults(playerChoice,machineChoice);
        optionsSector.removeChild(rockBtn);
        optionsSector.removeChild(paperBtn);
        optionsSector.removeChild(scissorsBtn);
        main.removeChild(optionsSector);

        const nextBtn = document.createElement('button');
        nextBtn.textContent = 'Next Round'

        main.appendChild(nextBtn);

        nextBtn.addEventListener('click', () => {
        phase3();
        main.removeChild(nextBtn);
        })

        
    })

    paperBtn.addEventListener('click', () => {    
        playerChoice = 'paper'
        machineChoice = options[Math.floor(Math.random() * 3)];
        h1.textContent = compareResults(playerChoice,machineChoice);
        optionsSector.removeChild(rockBtn);
        optionsSector.removeChild(paperBtn);
        optionsSector.removeChild(scissorsBtn);
        main.removeChild(optionsSector);

        const nextBtn = document.createElement('button');
        nextBtn.textContent = 'Next Round'

        main.appendChild(nextBtn);

        nextBtn.addEventListener('click', () => {
        phase3();
        main.removeChild(nextBtn);
        })

        
    })

    scissorsBtn.addEventListener('click', () => {    
        playerChoice = 'scissors'
        machineChoice = options[Math.floor(Math.random() * 3)];
        h1.textContent = compareResults(playerChoice,machineChoice);
        optionsSector.removeChild(rockBtn);
        optionsSector.removeChild(paperBtn);
        optionsSector.removeChild(scissorsBtn);
        main.removeChild(optionsSector);

        const nextBtn = document.createElement('button');
        nextBtn.textContent = 'Next Round'

        main.appendChild(nextBtn);

        nextBtn.addEventListener('click', () => {
        phase3();
        main.removeChild(nextBtn);
        })

        
    })



}

function phase3() {

    h1.textContent = 'Round 3. Choose an option:';

    const optionsSector = document.createElement('div');
    optionsSector.classList.add('options')

    main.appendChild(optionsSector);

    const rockBtn = document.createElement('button');
    rockBtn.textContent = 'Rock';
    const paperBtn = document.createElement('button');
    paperBtn.textContent = 'Paper';
    const scissorsBtn = document.createElement('button');
    scissorsBtn.textContent = 'Scissors'

    optionsSector.appendChild(rockBtn);
    optionsSector.appendChild(paperBtn);
    optionsSector.appendChild(scissorsBtn);

    rockBtn.addEventListener('click', () => {    
        playerChoice = 'rock'
        machineChoice = options[Math.floor(Math.random() * 3)];
        h1.textContent = compareResults(playerChoice,machineChoice);
        optionsSector.removeChild(rockBtn);
        optionsSector.removeChild(paperBtn);
        optionsSector.removeChild(scissorsBtn);
        main.removeChild(optionsSector);

        const nextBtn = document.createElement('button');
        nextBtn.textContent = 'Next Round'

        main.appendChild(nextBtn);

        nextBtn.addEventListener('click', () => {
        phase4();
        main.removeChild(nextBtn);
        })

        
    })

    paperBtn.addEventListener('click', () => {    
        playerChoice = 'paper'
        machineChoice = options[Math.floor(Math.random() * 3)];
        h1.textContent = compareResults(playerChoice,machineChoice);
        optionsSector.removeChild(rockBtn);
        optionsSector.removeChild(paperBtn);
        optionsSector.removeChild(scissorsBtn);
        main.removeChild(optionsSector);

        const nextBtn = document.createElement('button');
        nextBtn.textContent = 'Next Round'

        main.appendChild(nextBtn);

        nextBtn.addEventListener('click', () => {
        phase4();
        main.removeChild(nextBtn);
        })

        
    })

    scissorsBtn.addEventListener('click', () => {    
        playerChoice = 'scissors'
        machineChoice = options[Math.floor(Math.random() * 3)];
        h1.textContent = compareResults(playerChoice,machineChoice);
        optionsSector.removeChild(rockBtn);
        optionsSector.removeChild(paperBtn);
        optionsSector.removeChild(scissorsBtn);
        main.removeChild(optionsSector);

        const nextBtn = document.createElement('button');
        nextBtn.textContent = 'Next Round'

        main.appendChild(nextBtn);

        nextBtn.addEventListener('click', () => {
        phase4();
        main.removeChild(nextBtn);
        })

        
    })



}

function phase4() {

    h1.textContent = 'Round 4. Choose an option:';

    const optionsSector = document.createElement('div');
    optionsSector.classList.add('options')

    main.appendChild(optionsSector);

    const rockBtn = document.createElement('button');
    rockBtn.textContent = 'Rock';
    const paperBtn = document.createElement('button');
    paperBtn.textContent = 'Paper';
    const scissorsBtn = document.createElement('button');
    scissorsBtn.textContent = 'Scissors'

    optionsSector.appendChild(rockBtn);
    optionsSector.appendChild(paperBtn);
    optionsSector.appendChild(scissorsBtn);

    rockBtn.addEventListener('click', () => {    
        playerChoice = 'rock'
        machineChoice = options[Math.floor(Math.random() * 3)];
        h1.textContent = compareResults(playerChoice,machineChoice);
        optionsSector.removeChild(rockBtn);
        optionsSector.removeChild(paperBtn);
        optionsSector.removeChild(scissorsBtn);
        main.removeChild(optionsSector);

        const nextBtn = document.createElement('button');
        nextBtn.textContent = 'Next Round'

        main.appendChild(nextBtn);

        nextBtn.addEventListener('click', () => {
        phase5();
        main.removeChild(nextBtn);
        })

        
    })

    paperBtn.addEventListener('click', () => {    
        playerChoice = 'paper'
        machineChoice = options[Math.floor(Math.random() * 3)];
        h1.textContent = compareResults(playerChoice,machineChoice);
        optionsSector.removeChild(rockBtn);
        optionsSector.removeChild(paperBtn);
        optionsSector.removeChild(scissorsBtn);
        main.removeChild(optionsSector);

        const nextBtn = document.createElement('button');
        nextBtn.textContent = 'Next Round'

        main.appendChild(nextBtn);

        nextBtn.addEventListener('click', () => {
        phase5();
        main.removeChild(nextBtn);
        })

        
    })

    scissorsBtn.addEventListener('click', () => {    
        playerChoice = 'scissors'
        machineChoice = options[Math.floor(Math.random() * 3)];
        h1.textContent = compareResults(playerChoice,machineChoice);
        optionsSector.removeChild(rockBtn);
        optionsSector.removeChild(paperBtn);
        optionsSector.removeChild(scissorsBtn);
        main.removeChild(optionsSector);

        const nextBtn = document.createElement('button');
        nextBtn.textContent = 'Next Round'

        main.appendChild(nextBtn);

        nextBtn.addEventListener('click', () => {
        phase5();
        main.removeChild(nextBtn);
        })

        
    })



}

function phase5() {

    h1.textContent = 'Round 5 - Final round. Choose an option:';

    const optionsSector = document.createElement('div');
    optionsSector.classList.add('options')

    main.appendChild(optionsSector);

    const rockBtn = document.createElement('button');
    rockBtn.textContent = 'Rock';
    const paperBtn = document.createElement('button');
    paperBtn.textContent = 'Paper';
    const scissorsBtn = document.createElement('button');
    scissorsBtn.textContent = 'Scissors'

    optionsSector.appendChild(rockBtn);
    optionsSector.appendChild(paperBtn);
    optionsSector.appendChild(scissorsBtn);

    rockBtn.addEventListener('click', () => {    
        playerChoice = 'rock'
        machineChoice = options[Math.floor(Math.random() * 3)];
        h1.textContent = compareResults(playerChoice,machineChoice);
        optionsSector.removeChild(rockBtn);
        optionsSector.removeChild(paperBtn);
        optionsSector.removeChild(scissorsBtn);
        main.removeChild(optionsSector);

        const nextBtn = document.createElement('button');
        nextBtn.textContent = 'Result'

        main.appendChild(nextBtn);

        nextBtn.addEventListener('click', () => {
        endGame();
        main.removeChild(nextBtn);
        })

        
    })

    paperBtn.addEventListener('click', () => {    
        playerChoice = 'paper'
        machineChoice = options[Math.floor(Math.random() * 3)];
        h1.textContent = compareResults(playerChoice,machineChoice);
        optionsSector.removeChild(rockBtn);
        optionsSector.removeChild(paperBtn);
        optionsSector.removeChild(scissorsBtn);
        main.removeChild(optionsSector);

        const nextBtn = document.createElement('button');
        nextBtn.textContent = 'Result'

        main.appendChild(nextBtn);

        nextBtn.addEventListener('click', () => {
        endGame();
        main.removeChild(nextBtn);
        })

        
    })

    scissorsBtn.addEventListener('click', () => {    
        playerChoice = 'scissors'
        machineChoice = options[Math.floor(Math.random() * 3)];
        h1.textContent = compareResults(playerChoice,machineChoice);
        optionsSector.removeChild(rockBtn);
        optionsSector.removeChild(paperBtn);
        optionsSector.removeChild(scissorsBtn);
        main.removeChild(optionsSector);

        const nextBtn = document.createElement('button');
        nextBtn.textContent = 'Result'

        main.appendChild(nextBtn);

        nextBtn.addEventListener('click', () => {
        endGame();
        main.removeChild(nextBtn);
        })

        
    })



}

function endGame() {

    if (playerScore === machineScore) h1.textContent = `A tie! ${playerScore} to ${machineScore}.`
    else if (playerScore > machineScore) h1.textContent = `Congratulations ${playerName}, you win! ${playerScore} to ${machineScore}.`
    else h1.textContent = `You loose! ${playerScore} to ${machineScore}.`

    const newGameBtn = document.createElement('button');
    newGameBtn.textContent = 'Start a New Game'
    main.appendChild(newGameBtn);

    newGameBtn.addEventListener('click', () => {    
        phase0();
        main.removeChild(newGameBtn);
    });



}