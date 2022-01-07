var noOfDrumButton = document.querySelectorAll(".drum").length;
//selecting of each and eveything one by one
for (var i = 0; i < noOfDrumButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});
//for selection of keywords defined like w,s etc for drum
function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
    default:
      console.log("wrong selection");;

  }
}
//for creating animation
function buttonAnimation(currentKey){
  var activeKey=document.querySelector("."+currentKey);
  activeKey.classList.add("pressed");
  setTimeout(function(){
    activeKey.classList.remove("pressed");
  })
}
