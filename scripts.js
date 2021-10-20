let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns
let cell = document.querySelectorAll('td');
let button = `<button id='button'>[ ]</button>`;
let disable = 0;


//initialize the game

// use the value stored in the nextPlayer variable to indicate who the next player is

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{

    for(let i = 0; i<cells.length; i++){

         cell[i].innerHTML = button;

   }
    
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let buttons = document.querySelectorAll('button');
for (let i=0; i<buttons.length; i++)
{
    buttons[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event){

    let button = event.target;

   if(nextPlayer === 'X'){
    let nextPlayerLable = document.querySelector('#next-lbl');
        button.innerText = '[X]';
        button.disabled = true;
        nextPlayer = 'O';
        nextPlayerLable.innerHTML= nextPlayer;
        disable++;

 }else if (nextPlayer === 'O'){
    let nextPlayerLable = document.querySelector('#next-lbl');
     button.innerText = '[O]';
     button.disabled = true;
     nextPlayer = 'X';
     nextPlayerLable.innerHTML= nextPlayer;
     disable++
 }
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver())
    {

        let lable = document.querySelector('#game-over-lbl');
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element\

        lable.innerHTML = "Game Over";
        
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    if(disable === 9){
        return true;
    }else{
        return false;
    }
    // This function returns true if all the buttons are disabled and false otherwise 
   
}

