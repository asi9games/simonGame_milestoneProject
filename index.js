
$("#level-title").pulsate({
    repeat: 5,
});





var userPattern = [];

var gamePattern = [];

var userChosenColor;



var buttonColors = ["red", "blue", "green", "yellow"];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {

    
    $("#level-title").text("Level " + level);
    newCombination();
    started = true;
  }
});


$(document).ready(function () {
    
//Check which button gets pressed
for (var i = 0 ; i < document.querySelectorAll(".btn").length; i++) {
   document.querySelectorAll(".btn")[i].addEventListener('click' , function() {
 
$("#level-title").stop
userChosenColor = $(this).attr("id");
userPattern.push(userChosenColor);
console.log(userPattern);

clickButton(userChosenColor);

answerCheck(userPattern.length-1);
       });
       
    }
    });

function pulsate () {
    $("#level-title").pulsate();
    
}

function answerCheck(currentLevel) {

    if (gamePattern[currentLevel] === userPattern[currentLevel]) {

      console.log("success");

      if (userPattern.length === gamePattern.length){

        setTimeout(function () {
          newCombination();
        }, 500);

      }

    } else {

      console.log("wrong");
      
     $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);


      $("#level-title").text("Game Over, Press Any Key to Restart");

    }

}

//Function to create a random pattern
function newCombination () {
    
userPattern = [];
    
level++;
$("#level-title").text("Level " + level);

 var randomNumber =  Math.floor(Math.random() * 4);

 var randomColor = buttonColors[randomNumber];
 var randomColorIdSelector;
 var randomColorId =  
 
 gamePattern.push(randomColor);
    
 randomColorIdSelector = document.querySelector("#"+randomColor);
    
 $("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

 $("#" + randomColor).pulsate();  
    
    }; 
    
    
// Animate box around clicked buttons
function clickButton(currentColor) {
    
   $("#" + userChosenColor).pulsate({
    repeat: 2,
});

  $("#" + userChosenColor).addClass("clicked");
    
  setTimeout(function () {
    $("#" + userChosenColor).removeClass("clicked");
  }, 500);
}


function startOver() {

  level = 0;
  gamePattern = [];
  started = false;
}