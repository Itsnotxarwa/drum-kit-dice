 /*var randomNumber1 = Math.floor(Math.random()*6 + 1);
 var randomDiceImg = "dice" + randomNumber1 + ".png";
 var randomImgSrc = "images/" + randomDiceImg;

 var image1 = document.querySelectorAll("img")[0];
 image1.setAttribute("src", randomImgSrc);
      

var randomNumber2 = Math.floor(Math.random()*6 + 1);
var randomImgSrc2 = "images/dice" + randomNumber2 +".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImgSrc2);


if (randomNumber1 > randomNumber2)
 {
    document.querySelector("h1").innerHTML = "player 1 win";

}
else if (randomNumber2 > randomNumber1) 

{
    document.querySelector("h1").innerHTML = "player 2 win";
}
else
 {
    document.querySelector("h1").innerHTML = "draw";
}*/

var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<numberOfButtons; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    
   var buttonInnerHTML = this.innerHTML;
   makeSound(buttonInnerHTML);
   animatedButtons(buttonInnerHTML);

})
}   

document.addEventListener("keydown", function(event){
 
    makeSound(event.key);
    animatedButtons(event.key);

});


function makeSound(key) 
{

switch(key) {
    case "w":
        var audio = new Audio("sounds/tom-1.mp3");
    audio.play(); 
    break;
   
    case "a":
        var audio = new Audio("sounds/tom-2.mp3");
    audio.play(); 
    break;

    case "s":
        var audio = new Audio("sounds/tom-3.mp3");
    audio.play(); 
    break;

    case "d":
        var audio = new Audio("sounds/tom-4.mp3");
    audio.play(); 
    break;

    case "j":
        var audio = new Audio("sounds/crash.mp3");
    audio.play(); 
    break;

    case "k":
        var audio = new Audio("sounds/snare.mp3");
    audio.play(); 
    break;

    case "l":
        var audio = new Audio("sounds/kick-bass.mp3");
    audio.play(); 
    break;
    
    default: 
    console.log(buttonInnerHTML);
   };
};
function animatedButtons(currentKey) {
     var activeButtons = document.querySelector("."+ currentKey);
     activeButtons.classList.add("pressed"); 
     setTimeout(function(){
     activeButtons.classList.remove("pressed"); 
     },100);
}


 