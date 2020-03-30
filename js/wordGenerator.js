let wordsList = ["half", "cardboard", "oar", "babysitter", "drip", "shampoo", 'point', 'time machine']
let div = document.getElementById('guessingWord');
let guessWord = generateWord();
let score = 0;
let chance = 2;
let scoreBoard = document.getElementById('scoreCount');

function generateWord() {
    let randomWord = wordsList[Math.floor(Math.random() * (wordsList.length - 1))];
    let h1 = document.createElement('h1');
    let text = '';
    h1.id = 'blank'
    for (let i = 0; i < randomWord.length; i++) {
        text += '_ '
    }
    h1.innerHTML = text;
    div.appendChild(h1);
    return randomWord;
}

document.addEventListener("keyup", function(e) {
    if (e.keyCode == 90) {
        checkBase();
    }
})

function checkBase() {
    console.log(guessWord)
    let letters = {
        0: document.getElementById('a'),
        1: document.getElementById('b'),
        2: document.getElementById('c'),
        3: document.getElementById('d'),
        4: document.getElementById('e'),
        5: document.getElementById('f'),
        6: document.getElementById('g'),
        7: document.getElementById('h'),
        8: document.getElementById('i'),
        9: document.getElementById('j'),
        10: document.getElementById('k'),
        11: document.getElementById('l'),
        12: document.getElementById('m'),
        13: document.getElementById('n'),
        14: document.getElementById('o'),
        15: document.getElementById('p'),
        16: document.getElementById('q'),
        17: document.getElementById('r'),
        18: document.getElementById('s'),
        19: document.getElementById('t'),
        20: document.getElementById('u'),
        21: document.getElementById('v'),
        22: document.getElementById('w'),
        23: document.getElementById('x'),
        24: document.getElementById('y'),
        25: document.getElementById('z')
    }
    for(let i = 0; i < 26; i++) {
        if (letters[i].offsetTop > baseOne.offsetTop && (baseOne.offsetTop + 200) > letters[i].offsetTop  
        && letters[i].offsetLeft > baseOne.offsetLeft && (baseOne.offsetLeft + 200) > letters[i].offsetLeft) {
            checkLetter(letters[i], guessWord);
        }
    }
}

function checkLetter(letter, word) {
    letter.style.display = 'none';
    let guessedLetter = letter.id;
    let isLetter = false;
    for(let i = 0; i < word.length; i++) {
        if(word[i] == guessedLetter) {
            earnScore();
            displayLetter(guessedLetter, word);
            isLetter = true;
        } 
    }
    if(!isLetter) {
        console.log('lose')
        loseScore();
    }
}

function earnScore() {
    score++;
    scoreBoard.innerHTML = score;
}

function loseScore() {
    chance--;
    if (chance == 0) {
        gameLost();
    }
}

function displayLetter(guessedLetter, word) {
    let h1 = document.getElementById('blank');
    let h1WithSpace = h1.textContent;
    let h1WithNoSpace = '';
    let text = '';
    console.log('test')
    for(let i = 0; i < h1WithSpace.length; i++) {  // omit all spaces in h1
        if(h1WithSpace[i] == '_') {
            h1WithNoSpace += '_';
        } else if(h1WithSpace[i] == ' ') {
            h1WithNoSpace += ''
        } else {
            h1WithNoSpace += h1WithSpace[i]
        }
    }

    for(let i = 0; i < word.length; i++) {  // replace underline with a validated guessed letter
        if(h1WithNoSpace[i] == '_') {
            if(word[i] == guessedLetter) {
                text += guessedLetter;
            } else {
                text += '_ ';
            }
        } else {
            text += h1WithNoSpace[i]
        }
    }
    if(text == word) {  // check if blank lines are all filled
        h1.innerHTML = text;
        winGame(h1);
    } else {
        h1.innerHTML = text;
    }
}

function winGame(h1){
    let letterImages = document.getElementsByClassName('alphabets');
    let playerOne = document.getElementById('playerOne');
    let baseOne = document.getElementById('baseOne');
    let confetti = document.createElement('img');
    let playAgainButton = document.createElement('img');
    let congratMessage = document.createElement('h1');
    for(let i = 0; i < letterImages.length; i++) {
        letterImages[i].style.display = 'none';
    }
    playerOne.style.display = 'none';
    baseOne.style.display = 'none';
    confetti.src = "../images/confetti.gif";
    confetti.id = "confetti";
    congratMessage.id = "congratMessage";
    congratMessage.innerHTML = "Congratulation! You've guessed the word!";
    playAgainButton.src = "../images/play_again.png";
    playAgainButton.id = 'playAgain';
    playAgainButton.setAttribute('onclick', 'start()')
    document.body.appendChild(confetti);
    document.body.appendChild(congratMessage);
    document.body.appendChild(playAgainButton);
    h1.id = 'winGame';
}

function gameLost() {
    console.log('game lost')
    let letterImages = document.getElementsByClassName('alphabets');
    let playerOne = document.getElementById('playerOne');
    let baseOne = document.getElementById('baseOne');
    let h1 = document.getElementById('blank');
    let playAgainButton = document.createElement('img');
    let sadFaces = document.createElement('img');
    let message = document.createElement('h1');
    for(let i = 0; i < letterImages.length; i++) {
        letterImages[i].style.display = 'none';
    }
    playerOne.style.display = 'none';
    baseOne.style.display = 'none';
    h1.style.display = 'none';
    message.id = "message";
    message.innerHTML = "You've lost... :(";
    playAgainButton.src = "../images/play_again.png";
    playAgainButton.id = 'playAgain2';
    playAgainButton.setAttribute('onclick', 'start()')
    sadFaces.src = "../images/gamelost.gif";
    sadFaces.id = 'sadFaces';
    document.body.appendChild(message);
    document.body.appendChild(playAgainButton);
    document.body.appendChild(sadFaces);
    // h1.id = 'winGame';
}