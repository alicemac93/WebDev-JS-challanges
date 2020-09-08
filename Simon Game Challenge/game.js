var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  level++;
  $("#level-title").text("Level " + level);

  function playSound (name) {
      var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
      audio.play();
    };

    $(".btn").click(function(){
      var userChosenColour = $(".btn").attr("id");
      userClickedPattern.push(userChosenColour);
      playSound();
    });
};

function animatePress(currentColour) {
  setTimeout(function () {
    $(".btn").addClass(".pressed").removeClass(".pressed"), 100
  })
};

$(document).on("keypress", function () {
    nextSequence();
  });


function checkAnswer (currentLevel) {
  var currentLevel = level
  if (userClickedPattern === gamePattern) {
    console.log("success");
  } else {console.log("wrong");}
}
