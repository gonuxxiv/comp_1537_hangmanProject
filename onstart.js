let word = "hello";

function randomLetters (word) {
    let characters = word.length;
    for (var i = 0; i < characters; i++) {
        let result = word.charAt(i)
        image(result)
    }
}

function randomAlphabet () {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    for (var i = 0; i < alphabet.length; i++) {
        let result = alphabet.charAt(Math.floor(Math.random() * 26));
        image(result)
    }
}

function image (result) {
    let folder = "Images/";
    let fileType = ".png";

    let imageName = folder + result + fileType
    addImage(imageName)
} 


function randomLocation () {
    let x = document.documentElement.clientWidth;
    let y = document.documentElement.clientHeight;

    let randomX = (x / 20) + Math.floor(Math.random() * (x / 8));
    let randomY =(y / 20) + Math.floor(Math.random() * (y - (y / 6)));

    return [randomX, randomY]
}

function addImage (imageName) {
    let img = document.createElement("img");
    img.setAttribute("id", "alphabet")
    img.setAttribute("style", "position: absolute;");
    img.setAttribute("src", imageName)
    
    let xy = randomLocation()
    img.style.left = xy[0] + 'px';
    img.style.top = xy[1] + 'px';

    document.getElementById("body").appendChild(img);
}



randomLetters(word)
randomAlphabet()
