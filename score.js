let baseOne = document.getElementById('baseOne');
let score = document.getElementById('scoreCount');
let i = 1;

document.addEventListener("keyup", function(e) {
    if (e.keyCode == 90) {
        retrieved();
    }
})

function retrieved() {
    for(let i = 0; i < 26; i++) {
        if (alphabetLetters[i].offsetTop > baseOne.offsetTop && (baseOne.offsetTop + 120) > alphabetLetters[i].offsetTop  
        && alphabetLetters[i].offsetLeft > baseOne.offsetLeft && (baseOne.offsetLeft + 150) > alphabetLetters[i].offsetLeft) {
            earnScore(alphabetLetters[i]);
        }
    }
}


function earnScore(letter) {
    letter.style.display = 'none';
    score.innerHTML = i;
    i++;
}

let alphabetLetters = {
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