/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

    /**
* Display phrase on game board
*/
addPhraseToDisplay() {
    const charArray = this.phrase.split('');
    charArray.forEach(character => {
       const li = document.createElement('li');
       const ul = document.querySelector('ul');
        li.textContent = character

        if (character === " "){
            li.classList.add('space');
        } else {
            li.classList.add('letter');
            li.classList.add('hide');
            li.classList.add(character);
        }
        ul.appendChild(li);
    });
}

checkLetter(letter){
    return this.phrase.includes(letter);
};

showMatchedLetter(letter){
    const matchLetter = document.querySelectorAll('.letter');
    if (this.checkLetter(letter)) {
        for (let i = 0; i < letter.length; i++){
            if(matchLetter[i].classList.contains(letter)){
            machLetter[i].classList.remove('hide');
            matchLetter[i].classList.add('show')
            }
        }
    }
 }

 

};