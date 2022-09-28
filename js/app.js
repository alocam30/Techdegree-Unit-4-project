/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//addEventListener for 'Start Game' button
let game;
let btn_reset = document.getElementById("btn__reset");
btn_reset.addEventListener("click", e => {
    game = new Game();
    game.startGame();

    if (game) {
       game.resetGame();
    } else {
        game = new Game();
    }
});

/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
const keyBtn = document.getElementById('qwerty');
keyBtn.addEventListener("click", e => {
    if (e.target.className === 'key'){
    game.handleInteraction(e.target);
    }
});

