var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
if (randomNumber1 > randomNumber2) {
  document.querySelector("H4").innerHTML = "🚩Play1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("H4").innerHTML = "Player2 Wins!🚩";
}
else {
  document.querySelector("H4").innerHTML = "Draw!";
}