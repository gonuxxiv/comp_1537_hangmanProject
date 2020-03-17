let square = document.getElementById('char1');
let x = square.offsetLeft;
let y = square.offsetTop;
let width = window.innerWidth;
let height = window.innerHeight;
let letter = document.getElementById('letter');
let grabbed = false;
let speed = 50;

function depriveLetter() {
    if ((letter.offsetTop + 200) > square.offsetTop && square.offsetTop > letter.offsetTop  
    && (letter.offsetLeft + 200) > square.offsetLeft && square.offsetLeft > letter.offsetLeft) {
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
    keys[e.keyCode] = true;
    if (keys[37]){  // move left
        if(0 < square.offsetLeft) {
            square.style.left = moveLeft() + 'px';
            if (grabbed) {
                letter.style.left = moveLeft() + 'px';
            }
        }
    }
    if (keys[38]){  // move up
        if(0 < square.offsetTop) {
            square.style.top = moveUp() + 'px';
            if (grabbed) {
                letter.style.top = moveUp() + 'px';
            }
        }
    }
    if (keys[39]){  // move right
        if(square.offsetLeft < width - 170) {
            square.style.left = moveRight() + 'px';
            if (grabbed) {
                letter.style.left = moveRight() + 'px';
            }
        }
    }
    if(keys[40]) {  // move down
        if(square.offsetTop < height - 180) {
            square.style.top = moveDown() + 'px';
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
}, false);

function moveLeft() {
    x -= speed;
    return x
}

function moveRight() {
    x += speed;
    return x
}

function moveUp() {
    y -= speed;
    return y
}

function moveDown() {
    y += speed;
    return y
}