const imageBox = [
    "./image/dice1.png",
    "./image/dice2.png",
    "./image/dice3.png",
    "./image/dice4.png",
    "./image/dice5.png",
    "./image/dice6.png"
];

const randomSrc1 = Math.floor(Math.random() * imageBox.length);
const randomImages = imageBox[randomSrc1];

document.getElementById("dice1").setAttribute("src", randomImages);

const randomSrc2 = Math.floor(Math.random() * imageBox.length);
const randomImages2 = imageBox[randomSrc2];
document.getElementById("dice2").setAttribute("src", randomImages2);

if(randomSrc1 > randomSrc2){
    document.querySelector("h2").innerHTML = "🚩 Player 1 Wins!";
}
else if(randomSrc2 > randomSrc1){
    document.querySelector("h2").innerHTML = "Player 2 Wins! 🚩";
}
else{
    document.querySelector("h2").innerHTML = "Draw!";
}

            // or
// var randomNum1 = Math.floor(Math.random() * 6) + 1;
// var randomDiceImages = "dice" + randomNum1 + ".png";
// var randomImageSource = "image/" + randomDiceImages;

// var image1 = document.querySelectorAll("img")[0];
// image1.setAttribute("src", randomImageSource);

// var randomNum2 = Math.floor(Math.random() * 6 ) + 1;
// var randomDiceImages2 = "dice" + randomNum2 + ".png";
// var randomImageSource2 = "image/" + randomDiceImages2;

// var image2 = document.querySelectorAll("img")[1];
// image2.setAttribute("src", randomImageSource2);

// if(randomNum1 > randomNum2){
//  document.querySelector("h2").innerHTML = "🚩 Player 1 Wins!";
// }
// else if(randomNum1 > randomNum2){
//     document.querySelector("h2").innerHTML = "Player 2 Wins! 🚩";
// }
// else{
//     document.querySelector("h2").innerHTML = "Draw!";
// }