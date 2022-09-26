/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//addEventListener for 'Start Game' button
let game;
let btn_reset = document.getElementById('btn_reset');
btn_reset.addEventListener("click", e => {
    game = new Game();
    game.startGame();
});
