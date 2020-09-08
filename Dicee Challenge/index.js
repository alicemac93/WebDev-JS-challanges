
//defining the vars in the first step cause i need them for all 3 functions
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// dice 1
function randomNumber1gen() {
 if (randomNumber1 === 1) {document.querySelectorAll("img")[0].setAttribute("src", "images/dice1.png");}
 else if (randomNumber1 === 2) {document.querySelectorAll("img")[0].setAttribute("src", "images/dice2.png");}
 else if (randomNumber1 === 3) {document.querySelectorAll("img")[0].setAttribute("src", "images/dice3.png");}
 else if (randomNumber1 === 4) {document.querySelectorAll("img")[0].setAttribute("src", "images/dice4.png");}
 else if (randomNumber1 === 5) {document.querySelectorAll("img")[0].setAttribute("src", "images/dice5.png");}
 else if (randomNumber1 === 6) {document.querySelectorAll("img")[0].setAttribute("src", "images/dice6.png");}
 else {return "error"};

};
randomNumber1gen();

// dice 2
function randomNumber2gen() {
if (randomNumber2 === 1) {document.querySelectorAll("img")[1].setAttribute("src", "images/dice1.png");}
else if (randomNumber2 === 2) {document.querySelectorAll("img")[1].setAttribute("src", "images/dice2.png");}
else if (randomNumber2 === 3) {document.querySelectorAll("img")[1].setAttribute("src", "images/dice3.png");}
else if (randomNumber2 === 4) {document.querySelectorAll("img")[1].setAttribute("src", "images/dice4.png");}
else if (randomNumber2 === 5) {document.querySelectorAll("img")[1].setAttribute("src", "images/dice5.png");}
else if (randomNumber2 === 6) {document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png");}
else {return "error"};

};
randomNumber2gen();

// winner
function winner() {
  if (randomNumber1 > randomNumber2) {document.querySelector("h1").textContent= "Player 1 won";}
  else if (randomNumber1 < randomNumber2) {document.querySelector("h1").textContent= "Player 2 won";}
  else if (randomNumber1 === randomNumber2) {document.querySelector("h1").textContent= "Tie";}
  else {document.querySelectorAll("h1").textContent= "Error";}
}

winner();
