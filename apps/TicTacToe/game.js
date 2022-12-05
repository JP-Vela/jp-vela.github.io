let turnO = true; // O goes first
let cellClass = "col-md";
let  playerIndicator = document.getElementById("playerIndicator");
let  winnerIndicator = document.getElementById("winnerIndicator");
let winnerFound = false;

let cells = document.getElementsByClassName(cellClass);

//Add even listeners to all the cells in the grid
for(let i = 0; i<cells.length; i++){
    cells[i].addEventListener("click", gridClick);
    cells[i].innerHTML = "";
}

//Click handler for every cell
function gridClick(e){

    if(e.target.innerHTML=="" && !winnerFound){
      
        if(turnO){
            e.target.innerHTML = "O";
            playerIndicator.textContent="X";
        } else {
            e.target.innerHTML = "X";
            playerIndicator.textContent="O";
        }

    } else {
        console.log("Can't be placed");
        return;
    }


    let winner = checkWinner()

    if(winner==""){
        console.log("No winner");
    } else if (winner=="O"){
        console.log("O wins!");
        winnerFound = true;
        winnerIndicator.innerHTML = "O wins!";
    } else if (winner=="X"){
        console.log("X wins!");
        winnerFound = true;
        winnerIndicator.innerHTML = "X wins!";
    } else if (winner="No winner"){
        console.log("Cats game!");
        winnerFound = true;
        winnerIndicator.innerHTML = "Game over!";
        playerIndicator.innerHTML = "None";
    }

    turnO = !turnO;
}

function checkWinner(){
    // 0, 3, 6
    // 1, 4, 7
    // 2, 5, 8

    let vertical = false;
    let horizontal = false;
    let diagonal = true;
    let winner = "";

    //Check verticals
    for(let i = 0; i<3; i++){
        vertical = true;
        for(let j = i, first = cells[i].innerHTML; j<cells.length; j+=3){
            if(cells[j].innerHTML != first || first==""){
                vertical = false;
                break;
            }
        }

        //Pure aesthetic reasons
        if(vertical){
            winner = cells[i].innerHTML;

            for(let j = i, first = cells[i].innerHTML; j<cells.length; j+=3){
                cells[j].style.color="tomato";
            }
            break;
        }
    }


    // 0, 1, 2
    // 3, 4, 5
    // 6, 7, 8

    //Check horizontals
    for(let i = 0; i<7; i+=3){
        horizontal = true;
        for(let j = i, first = cells[i].innerHTML; j<i+3; j++){
            if(cells[j].innerHTML != first || first==""){
                horizontal = false;
                break;
            }
        }

        //Pure aesthetic reasons
        if(horizontal){
            winner = cells[i].innerHTML;

            for(let j = i, first = cells[i].innerHTML; j<i+3; j++){
                cells[j].style.color="tomato";
            }
            break;
        }
    }

    // 0, 4, 8
    // 2, 4, 6

    //Check diagonal top left to bottom right
    first = cells[0].innerHTML;
    for(let i = 0; i<cells.length; i+=4){
        if(cells[i].innerHTML!=first || first==""){
            diagonal = false;
            break;
        }
    }

    //Pure aesthetic reasons
    if(diagonal){
        winner = first;
        for(let i = 0; i<cells.length; i+=4){
            cells[i].style.color="tomato";
        }
    }

    diagonal = true;

    //Check diagonal top right to bottom left
    first = cells[2].innerHTML;
    for(let i = 2; i<7; i+=2){
        if(cells[i].innerHTML!=first || first==""){
            diagonal = false;
            break;
        }
    }

    //Pure aesthetic reasons
    if(diagonal){
        winner = first;
        for(let i = 2; i<7; i+=2){
            cells[i].style.color="tomato";
        }
    }
    
    if(winner==""){
        let full=true;

        for(let i = 0; i<cells.length; i++){
            if(cells[i].innerHTML==""){
                full=false;
            }
        }

        if(full){
            winner="No winner";
        }
    }

    return winner;
}

//Clear board and variables to restart game
function playAgain(){
    for(let i = 0; i<cells.length; i++){
        cells[i].innerHTML = "";
        cells[i].style.color="white";
    }

    winnerFound = false;
    winnerIndicator.innerHTML = "No winner yet";
    turnO = true; // O goes first
    playerIndicator.textContent="O";
}