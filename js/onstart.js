// -----------Display letters in random locations----------- //
// Pass each alphabet letter
function randomAlphabet () {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    for (let i = 0; i < 26; i++) {
        let result = alphabet[i];
        image(result)
    }
}

// Get corresponding images
function image (result) {
    let folder = "../images/";
    let fileType = ".png";

    let imageName = folder + result + fileType
    addImage(imageName, result)
} 

// Randomly assign position of the letters on screen
function randomLocation () {
    let x = document.documentElement.clientWidth;
    let y = document.documentElement.clientHeight;

    let randomX = (x / 20) + Math.floor(Math.random() * (x / 8));
    let randomY =(y / 20) + Math.floor(Math.random() * (y - (y / 6)));

    return [randomX, randomY]
}

// Append the letter-images to the document
function addImage (imageName, result) {
    let img = document.createElement('img');
    img.setAttribute("id", result);
    img.setAttribute("class", "alphabets")
    img.setAttribute("style", "position: absolute;");
    img.setAttribute("src", imageName)
    
    let xy = randomLocation()
    img.style.left = xy[0] + 'px';
    img.style.top = xy[1] + 'px';

    document.getElementById("body").appendChild(img);
}

randomAlphabet()
// ------------------------------------------------------------------------------------------------------------------- //