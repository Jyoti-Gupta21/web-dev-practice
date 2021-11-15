
alert("refresh the page to see changes")

//player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var diceImage1 = "dice" + randomNumber1 + ".png";
var diceImageSource1 = "images/" + diceImage1;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", diceImageSource1);


//player2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var diceImage2 = "dice" + randomNumber2 + ".png";
var diceImageSource2 = "images/" + diceImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", diceImageSource2);


//player3
var randomNumber3 = Math.floor(Math.random() * 6) + 1;

var diceImage3 = "dice" + randomNumber3 + ".png";
var diceImageSource3 = "images/" + diceImage3;

var image3 = document.querySelectorAll("img")[2];
image3.setAttribute("src", diceImageSource3);


//player4
var randomNumber4 = Math.floor(Math.random() * 6) + 1;

var diceImage4 = "dice" + randomNumber4 + ".png";
var diceImageSource4 = "images/" + diceImage4;

var image4 = document.querySelectorAll("img")[3];
image4.setAttribute("src", diceImageSource4);

//result
if (randomNumber1 > randomNumber2 && randomNumber1 > randomNumber3 && randomNumber1 > randomNumber4) {
    document.querySelector("h1").innerHTML = "Player 1️⃣ wins!🏁 "
}
else if (randomNumber1 < randomNumber2 && randomNumber3 < randomNumber2 && randomNumber4 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2️⃣ wins!🏁"
}
else if (randomNumber3 > randomNumber1 && randomNumber3 > randomNumber2 && randomNumber3 > randomNumber4) {
    document.querySelector("h1").innerHTML = "Player 3️⃣ wins!🏁"
}
else if (randomNumber4 > randomNumber1 && randomNumber4 > randomNumber2 && randomNumber4 > randomNumber3) {
    document.querySelector("h1").innerHTML = "Player 4️⃣ wins!🏁"
}
else {
    document.querySelector("h1").innerHTML = "🎌🎌Draw!🎌🎌";
}

