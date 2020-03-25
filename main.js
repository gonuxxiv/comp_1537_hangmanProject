let startButton = document.getElementById('start');
let quitButton = document.getElementById('quit');
let startAudio = new Audio("audios/start.mp3");
startAudio.volume = 0.6;
let quitAudio = new Audio("audios/quit.mp3");
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


