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
    const hideOverlay = document.getElementById('overlay');
    hideOverlay.style.display = 'none';
    this.activePhrase = this.getRandomPhrase();  
    this.activePhrase.addPhraseToDisplay();  
    };  

}