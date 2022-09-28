/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(missed, phrases, activePhrase) {
        this.missed = 0;
        this.phrases = [
           new Phrase('solar power'),
           new Phrase('royals'),
           new Phrase('supercut'),
           new Phrase('greenlight'),
           new Phrase('perfect places')
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
* Controls the game logic by checking to see if the letter clicked matches a letter in the phrase
*/
 handleInteraction(btn_reset){
    btn_reset.disabled =true;
    if (this.activePhrase.checkLetter(btn_reset.innerHTML)) {
        btn_reset.classList.add('chosen');
        this.activePhrase.showMatchedLetter(btn_reset.innerHTML); 
    } else {
        btn_reset.classList.add('wrong');
        this.removeLife();
    } 
    if(this.checkForWin()){
        this.gameOver(true);
    };
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
        let hide = document.getElementsByClassName('hide');
            if (hide.length === 0) {
                return true;
            } else {
                return false;
            }
        };


    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife(){
        this.missed += 1;
        const livesLeft = document.querySelectorAll(".tries");

        for (let i = 0; i < livesLeft.length; i++) {
            const heartImage = livesLeft[i].firstChild;
            if(heartImage.src.includes('images/liveHeart.png')){
                 return heartImage.src = 'images/lostHeart.png';   
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
        overlay.style.display = 'flex';
        let overlayStart = document.querySelector('.start');
        let gameOverMessage  = document.getElementById("game-over-message")

        if (gameWon){
            overlayStart.classList.add('win');
            gameOverMessage.innerHTML = `Yay, you won!`;
        } else if (!gameWon) {
            overlayStart.classList.add('lose');
            gameOverMessage.innerHTML = `Sorry, please try again`;
        }

    }

    //Removes all the 'li' elements from the Phrase 'ul' element
    //Enables all onscreen keyboard buttons
    //Resets the heart images (player's lives) in the scoreboard 

    resetGame(){
        let phraseLi = document.querySelectorAll("#phrase li");
        for (let i = 0; i < phraseLi.length; i++){
            phraseLi[i].remove();
        };

        let key = document.querySelectorAll('.key');
        for (let i = 0; i < key.length; i++) {
         key[i].className = 'key';
         key[i].classList.remove('chosen');
         key[i].classList.remove('wrong');  
         key[i].disabled = false;   
        }
        
        for (let i = 0; i < livesLeft.length; i++) {
            livesLeft[i].setAttribute("src", "images/liveheart.png");
        }

    };

}