/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(missed, phrases, activePhrase) {
        this.missed = 0;
        this.phrases = [
           new Phrase('Solar Power'),
           new Phrase('Royals'),
           new Phrase('Supercut'),
           new Phrase('Greenlight'),
           new Phrase('Perfect places')
        ];
        this.activePhrase = null;

    }

    /**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
getRandomPhrase(phrases) {
    const randomPhrase = Math.floor(Math.random()*this.phrases.length);
    return this.phrases[randomPhrase]; 
};
    
/**
* Begins game by selecting a random phrase and displaying it to user
*/
startGame() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
    this.activePhrase = this.getRandomPhrase();  
    this.activePhrase.addPhraseToDisplay();  
    };  



    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin(){
        let hide = document.querySelectorAll('.hide');
        let win = true;
        let emptyBoxes = document.querySelectorAll('.letter');

        emptyBoxes.forEach(letter => {
            let letterHidden = letter.classList.contains('hide');
            if (letterHidden) {
                win = false;
            } else {
                return win;
            }

        });
        
    };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife(){
        this.missed += 1;
        const livesLeft = document.querySelectorAll('.tries');

        for (let i = 0; i < livesLeft.length; i++) {
            const heartImage = livesLeft[i].firstChild;
            if(livesLeft.src.includes('images/liveHeart.png')){
                 return livesLeft.src = 'images/lostHeart.png';   
            }
            
            if(this.missed === 5){
                this.gameOver();
            }
        }
    }; 

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon){
        hideOverlay.style.display = '';
        if (this.missed === 5){
            overlay.append("Sorry, you lost");
            overlay.classList.remove('start');
            overlay.classList.add('lose')
        } else {
            overlay.append("Yay, you won!");
            overlay.classList.remove('start');
            overlay.classList.add('win');
        }
    };
    
}