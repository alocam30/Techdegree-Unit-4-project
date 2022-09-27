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
        btn_reset.classList.add('.chosen');
        this.showMatchedLetter();
    } else {
        btn_reset.classList.add('.wrong');
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
        let hide = document.querySelectorAll('.hide');
        let win = true;
        let emptyBoxes = document.querySelectorAll('.letter');

        emptyBoxes.forEach(letter => {
            let letterHidden = letter.classList.contains('hide');
            if (letterHidden) {
                win = false;
            } 
                return win;

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
        const liveHeartImg = document.createElement('liveHeartImg');
        liveHeartImg.src = "image/liveheart.png";

        for (let i = 0; i < livesLeft.length; i++) {
            const heartImage = livesLeft[i].firstChild;
            if(livesLeft.includes(liveHeartImg.src)){
                 return livesLeft.src = 'image/lostHeart.png';   
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