let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns
let cells = document.querySelectorAll('td');
let btn = "<button id='btn'>[ ]</button>";
let disable =0;

//initialize the game

// use the value stored in the nextPlayer variable to indicate who the next player is


//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   for(leti=0;i<cells.length;i++){
       cells[i].innerHTML=btn;
   }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
   let button= event.target;
   if(nextPlayer === 'X'){
       let nextP =document.querySelector('#next-lbl');
       button.innerText = '[X]';
       button.disabled=true;
       nextPlayer ='0';
       nextP.innerHTML =nextPlayer;
       disable++;
   }
   else if(nextPlayer ==='0'){
       let nextP = document.querySelector('#next-lbl');
       button.innerText='[0]';
       button.disabled=true;
       nextPlayer='X';
       nextP.innerHTML=nextPlayer;
       disable++;
   }

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver())
    {
        let read = document.querySelector('#game-over-lbl');
        read.innerHTML="Game Over";
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    if(disable===9){
        return true;
    }
    else{
        return false;
    }
    // This function returns true if all the buttons are disabled and false otherwise 
   
}
