let startButton = document.getElementById('start');
let quitButton = document.getElementById('quit');
let startAudio = new Audio("../audios/start.mp3");
startAudio.volume = 0.6;
let quitAudio = new Audio("../audios/quit.mp3");
quitAudio.volume = 0.3;



function start() {
    startAudio.play();
    setTimeout(function() { 
        startAudio.load();
        window.location.href = "ingame.html"; }, 700)
}

function quit() {
    quitAudio.play();
    setTimeout(function() { 
        quitAudio.load();
        window.location.href = "index.html"; }, 800)
}

function readyStart() {
    let h1 = document.createElement('h1')
    h1.id = "ready";
    let startText = "Ready ";
    let countDown = 3;
    let time = setInterval(function() {
        countDown -= 1;
        h1.innerHTML = "";
        h1.innerHTML = startText + countDown;
    }, 1000)
    setTimeout(function(){ 
        clearInterval(time);
        h1.id = "start";
        h1.innerHTML = "Start!"
        setTimeout(function() { 
            let scriptFiles = ["../js/onstart.js", "../js/wordGenerator.js", "../js/movement.js", "../js/score.js"]
            h1.innerHTML = ""; 
            for(let i = 0; i < scriptFiles.length; i++) {
                let script = document.createElement('script');
                script.src = scriptFiles[i];
                script.id = i;
                document.body.appendChild(script);
            }
        }, 1000)
    }, 3000)
    h1.innerHTML = startText + countDown;
    document.body.appendChild(h1);
}

function inGameTimeCount() {
    let h1 = document.createElement('h1');
    let initialCount = 30;
    let time = setInterval(function() {
        initialCount -= 1;
        h1.innerHTML = "";
        h1.innerHTML = initialCount;
    }, 1000)
    setTimeout(function(){ clearInterval(time) }, 31000)
    h1.innerHTML = initialCount;
    document.body.appendChild(h1);
}

