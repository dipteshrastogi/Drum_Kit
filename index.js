var i=0;
// Detecting button press//
var n = document.querySelectorAll(".drum").length;
for(var i=0; i<n; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(event){
        var text_value = this.innerHTML;
        makeSound(text_value);
        button_Animation(text_value);
        console.log(event);
    })
}
// Adding key press event listener to entire document//
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    button_Animation(event.key);
    console.log(i);
})
// Adding key press event listener to entire buttons only//
// var drums = document.querySelectorAll(".drum");

// for (var i = 0; i < drums.length; i++) {
//   drums[i].addEventListener("keydown", function (event) {
//     makeSound(event.key);
//     button_Animation(event.key);
//   });





function makeSound(key){
    switch(key){
        case"w":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            // alert(crash.filelocation);
            break;
        case"a":
            var kick_bass = new Audio('./sounds/kick-bass.mp3');
            kick_bass.play();
            break;
        case"s":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        case"d":
            var tom_1 = new Audio('./sounds/tom-1.mp3');
            tom_1.play();
            break;
        case"j":
            var tom_2 = new Audio('./sounds/tom-2.mp3');
            tom_2.play();
            break;
        case"k":
            var tom_3 = new Audio('./sounds/tom-3.mp3');
            tom_3.play();
            break;
        case"l":
            var tom_4 = new Audio('./sounds/tom-4.mp3');
            tom_4.play();
            break;
        default: console.log("It's still working");
    }   
}


function button_Animation(currentKey){
  var active_button = document.querySelector("."+currentKey);
  active_button.classList.add("pressed");
  setTimeout(function(){
    active_button.classList.remove("pressed");
  }, 100);
}