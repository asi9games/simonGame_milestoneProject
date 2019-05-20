//alert("working correctly!");
var gamePattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

function newCombination () {
 var randomNumber =  Math.floor(Math.random() * 4);

 var randomColor = buttonColors[randomNumber];
 
 gamePattern.push(randomColor);
    
 document.querySelector("#"+randomColor);
    
    }; 