let wordsList = ["half", "cardboard", "oar", "babysitter", "drip", "shampoo", 'point', 'time machine']
let div = document.getElementById('guessingWord');
let guessWord = generateWord();

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
    for(let i = 0; i < 26; i++) {
        if (letters[i].offsetTop > baseOne.offsetTop && (baseOne.offsetTop + 120) > letters[i].offsetTop  
        && letters[i].offsetLeft > baseOne.offsetLeft && (baseOne.offsetLeft + 150) > letters[i].offsetLeft) {
            checkLetter(letters[i], guessWord);
        }
    }
}

function checkLetter(letter, word) {
    console.log(word)
    let guessedLetter = letter.id;
    for(let i = 0; i < word.length; i++) {
        if(word[i] == guessedLetter) {
            displayLetter(guessedLetter, word);
        }
    }
}

function displayLetter(guessedLetter, word) {
    let h1 = document.getElementById('blank');
    let h1WithSpace = h1.textContent;
    let h1WithNoSpace = '';
    let text = '';
    for(let i = 0; i < h1WithSpace.length; i++) {
        if(h1WithSpace[i] == '_') {
            h1WithNoSpace += '_';
        } else if(h1WithSpace[i] == ' ') {
            h1WithNoSpace += ''
        } else {
            h1WithNoSpace += h1WithSpace[i]
        }
    }
    for(let i = 0; i < word.length; i++) {
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
    h1.innerHTML = text;
}


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