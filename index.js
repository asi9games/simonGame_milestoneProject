var userPattern = [];

var gamePattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

function newCombination () {
 
 var randomNumber =  Math.floor(Math.random() * 4);

 var randomColor = buttonColors[randomNumber];
 var randomColorIdSelector;
 var randomColorId = "#" + randomColor; 
 
 gamePattern.push(randomColor);
    
 randomColorIdSelector = document.querySelector("#"+randomColor);
    
 $(randomColorId).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
    }; 


for (var i = 0 ; i < document.querySelectorAll(".btn").length; i++) {
   document.querySelectorAll(".btn")[i].addEventListener('click' , function() {

console.log(this.id); 
var userChosenColor = this.id;
       });
       