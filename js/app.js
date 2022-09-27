/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//addEventListener for 'Start Game' button
let game;
let btn_reset = document.getElementById("btn__reset");
btn_reset.addEventListener("click", e => {
    game = new Game();
    game.startGame();
});

/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
const qwerty = document.getElementById('qwerty');
qwerty.addEventListener("click", e => {
    game.handleInteractions(e.target);
})
