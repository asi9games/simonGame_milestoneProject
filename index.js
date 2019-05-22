
var userPattern = [];

var gamePattern = [];

var userChosenColor;

var buttonColors = ["red", "blue", "green", "yellow"];


$(document).ready(function () {
    
//Check which button gets pressed
for (var i = 0 ; i < document.querySelectorAll(".btn").length; i++) {
   document.querySelectorAll(".btn")[i].addEventListener('click' , function() {
 

userChosenColor = $(this).attr("id");
userPattern.push(userChosenColor);
console.log(userPattern);

clickButton(userChosenColor);
       });
       
    }
    });




//Function to create a random pattern
function newCombination () {

 var randomNumber =  Math.floor(Math.random() * 4);

 var randomColor = buttonColors[randomNumber];
 var randomColorIdSelector;
 var randomColorId =  
 
 gamePattern.push(randomColor);
    
 randomColorIdSelector = document.querySelector("#"+randomColor);
    
 $("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
    }; 
    
    
// Animate box around clicked buttons
function clickButton(currentColor) {

  $("#" + userChosenColor).addClass("clicked");
    
  setTimeout(function () {
    $("#" + userChosenColor).removeClass("clicked");
  }, 500);
}
