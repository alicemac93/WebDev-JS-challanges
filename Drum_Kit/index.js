// detecting button press

var noOfDrumButtons = document.querySelectorAll(".drum").length; // select all objects with class drum and what is their length


for (var i = 0; i < noOfDrumButtons; i++) { // for loop - start at i=0 finish at when i is = no. of buttons, add 1 to i

 document.querySelectorAll(".drum")[i].addEventListener("click", function() { //for the no.(i) of .drum buttons when click event occurs then alert "..."

  var buttonInnerHTML = this.innerHTML;

  makeSound(buttonInnerHTML);

  buttonAnimation(buttonInnerHTML);

  });
}

// detecting keyboard press
document.addEventListener("keydown", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key){

  switch (key) {
    case "l":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;

    case "k":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;

    case "j":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;

    case "s":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;

    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
    break;

    case "w":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;

    default: console.log(buttonInnerHTML);

  }
}


function buttonAnimation(currentKey) {
 var activeButton = document.querySelector("." + currentKey); //new Variable triggering CSS class to change
 activeButton.classList.add("pressed"); // adding a .pressed CSS class to it when it is pressed
 setTimeout(function() {
   activeButton.classList.remove("pressed");
 }, 500);

}
