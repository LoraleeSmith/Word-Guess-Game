// create array
const words = ['fall out boy', 'my chemical romance', 'panic at the disco', 'asking alexandria', 'escape the fate', 'paramore']
// choose word randomly
let randNum = Math.floor(Math.random() * words.length);
let chosenWord = word[randNum];
let rightWord = [];
let wrongWord = [];
let underScore = [];

// DOM Manipulation
let docUnderscore = document.getElementsByClassName('underscore');
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');
//testing
console.log(chosenWord);

// create underscores based on word length
let generateUnderscore = () => {
    for (let i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

// get user guess
document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keycode);
    // if users guess is right
    if (chosenWord.indexOf(keyword) > -1) {
        console.log(true);
        //add to right word array
        rightWord.push(keyword);
        docUnderscore[0].innerHTML = underscore.join('');
        docRightGuess[0].innerHTML = rightGuess.join('');

        //replace underscore with right letter
        underscore[chosenWord.indexOf(keyword)] = keyword;
        //check to see if user word matches guesses
        if (underscore.join('') == chosenWord) {
            alert('You Win!')
        }
        else {
            wrongWord.push(keyword);
            docWrongGuess[0].innerHTML = wrongGuess.join('');
        }
    }

    function newFunction() {
        console.log(generateUnderscore());
    }
);}