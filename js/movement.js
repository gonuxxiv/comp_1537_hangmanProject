let character = document.getElementById('playerOne');
let x = character.offsetLeft;
let y = character.offsetTop;
let width = window.innerWidth;
let height = window.innerHeight;
let grabbed = true;
let speed = 8;
let pencilTipLeft = null;
let pencilTipRight = null;
let sfx = new Audio("../audios/sfx_grab.mp3");
sfx.volume = 0.8;

// -----------Letter Grab Functions----------- //
let alphabets = {
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
    25: document.getElementById('z'),
    move: function(letter) {
        document.addEventListener("keydown", function(e) {
            if (keys[90]) {
                // speed = 40;
                if (keys[37]){  // move left
                    initiateLeft(letter);
                }
                if (keys[38]){  // move up
                    initiateUp(letter);
                }
                if (keys[39]){  // move right
                    initiateRight(letter);
                }
                if (keys[40]){  // move down
                    initiateDown(letter);
                }
            }
        })
        document.addEventListener("keyup", function(e) {
            if(e.keyCode == 90) {
                keys[e.keyCode]=false;
                letter = null;
                // speed = 10;
                grabbed = true;
            }
        })
    }
}

function depriveLetters() {
    for(let i = 0; i < 26; i++) {
        if ((alphabets[i].offsetTop + 25) > (character.offsetTop + pencilTipLeft) && (character.offsetTop + pencilTipLeft) > (alphabets[i].offsetTop - 25)  
        && (alphabets[i].offsetLeft + 25) > (character.offsetLeft + pencilTipRight) && (character.offsetLeft + pencilTipRight) > (alphabets[i].offsetLeft - 25)) {
            if (keys[90] && grabbed) {
                sfx.play();
                alphabets.move(alphabets[i])
                grabbed = false;
            } 
        }
    }
}
// ------------------------------------------------------------------------------------------------------------------- //

// -----------Movement Functions----------- //
let keys = {}
document.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
    if (keys[37]){  // move left
        character.style.transform = "scaleX(-1)";
        pencilTipRight = 0;
        pencilTipLeft = 45;
        initiateLeft(character);
    }
    if (keys[38]){  // move up
        if(0 < character.offsetTop) {
            initiateUp(character);
        }
    }
    if (keys[39]){  // move right
        if(character.offsetLeft < width - 170) {
            character.style.transform = "scaleX(1)";
            pencilTipRight = 80;
            initiateRight(character);
        }
    }
    if(keys[40]) {  // move down
        if(character.offsetTop < height - 180) {
            initiateDown(character);
        }
    }
    if(keys[90]) {
        depriveLetters();
    }
} , false);

document.addEventListener("keyup", function (e) {
    keys[e.keyCode]=false;
}, false);

function initiateLeft(char) {
    moveLeft(char);
}

function initiateRight(char) {
    moveRight(char);
}

function initiateUp(char) {
    moveUp(char);
}

function initiateDown(char) {
    moveDown(char);
}

function moveLeft(char) {
    char.style.left = (x + 'px')
    x -= 1;
    let motion = setTimeout(function() {
        if(0 < char.offsetLeft) {
            initiateLeft(char);
        }
    }, speed)
    if (!keys[37]) {
        clearTimeout(motion)
    }
}

function moveUp(char) {
    char.style.top = (y + 'px')
    y -= 4;
    let motion = setTimeout(function() {
        if(0 < char.offsetTop) {
            initiateUp(char);
        }
    }, speed)
    if (!keys[38]) {
        clearTimeout(motion)
    }
}

function moveRight(char) {
    char.style.left = (x + 'px')
    x += 1;
    let motion = setTimeout(function() {
        if(char.offsetLeft < width - 100) {
            initiateRight(char);
        }
    }, speed)
    if (!keys[39]) {
        clearTimeout(motion)
    }
}

function moveDown(char) {
    char.style.top = (y + 'px')
    y += 4;
    let motion = setTimeout(function() {
        if(char.offsetTop < height - 100) {
            initiateDown(char);
        }
    }, speed)
    if (!keys[40]) {
        clearTimeout(motion)
    }
}
// ------------------------------------------------------------------------------------------------------------------- //