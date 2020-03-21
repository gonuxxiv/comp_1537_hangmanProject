let character = document.getElementById('playerOne');
let x = character.offsetLeft;
let y = character.offsetTop;
let width = window.innerWidth;
let height = window.innerHeight;
let letter = document.getElementById('letter');
let grabbed = false;
let playerOne;
let myGamePiece = {};
let speed = 5;

function depriveLetter() {
    if ((letter.offsetTop + 200) > character.offsetTop && character.offsetTop > letter.offsetTop  
    && (letter.offsetLeft + 200) > character.offsetLeft && character.offsetLeft > letter.offsetLeft) {
        if (!(grabbed)) {
            grabbed = true;
        } 
        return grabbed
    }
    if (grabbed) {
        grabbed = false;
        return grabbed;
    }
}

let keys = {}
document.addEventListener("keydown", function (e) {
    console.log(keys)
    keys[e.keyCode] = true;
    if (keys[37]){  // move left
        initiateLeft(character);
            // character.style.left = moveLeft() + 'px';
        if (grabbed) {
            letter.style.left = moveLeft() + 'px';
        }
    }
    if (keys[38]){  // move up
        if(0 < character.offsetTop) {
            initiateUp(character);
            // character.style.top = moveUp() + 'px';
            if (grabbed) {
                letter.style.top = moveUp() + 'px';
            }
        }
    }
    if (keys[39]){  // move right
        if(character.offsetLeft < width - 170) {
            initiateRight(character);
            // character.style.left = moveRight() + 'px';
            if (grabbed) {
                letter.style.left = moveRight() + 'px';
            }
        }
    }
    if(keys[40]) {  // move down
        if(character.offsetTop < height - 180) {
            initiateDown(character);
            // character.style.top = moveDown() + 'px';
            if (grabbed) {
                letter.style.top = moveDown() + 'px';
            }
        }
    }
    if(keys[90]) {
        depriveLetter();
    }
} , false);

document.addEventListener("keyup", function (e) {
    keys[e.keyCode]=false;
    console.log(keys)
}, false);

function initiateLeft(character) {
    moveLeft(character);
    // x -= speed;
    // return x
}

function initiateRight(character) {
    moveRight(character);
    // x += speed;
    // return x
}

function initiateUp(character) {
    moveUp(character);
    // y -= speed;
    // return y
}

function initiateDown(character) {
    moveDown(character);
    // y += speed;
    // return y
}

function moveLeft(character) {
    character.style.left = (x + 'px')
    x -= 1;
    let motion = setTimeout(function() {
        if(0 < character.offsetLeft) {
            initiateLeft(character);
        }
    }, speed)
    if (!keys[37]) {
        clearTimeout(motion)
    }
}

function moveUp(character) {
    character.style.top = (y + 'px')
    y -= 4;
    let motion = setTimeout(function() {
        if(0 < character.offsetTop) {
            initiateUp(character);
        }
    }, speed)
    if (!keys[38]) {
        clearTimeout(motion)
    }
}

function moveRight(character) {
    character.style.left = (x + 'px')
    x += 1;
    let motion = setTimeout(function() {
        if(character.offsetLeft < width - 170) {
            initiateRight(character);
        }
    }, speed)
    if (!keys[39]) {
        clearTimeout(motion)
    }
}

function moveDown(character) {
    character.style.top = (y + 'px')
    y += 4;
    let motion = setTimeout(function() {
        if(character.offsetTop < height - 180) {
            initiateDown(character);
        }
    }, speed)
    if (!keys[40]) {
        clearTimeout(motion)
    }
}