// Store drum buttons in an array
const drums = document.querySelectorAll("button.drum");
const wAudio = new Audio('sounds/crash.mp3');
const aAudio = new Audio('sounds/kick-bass.mp3');
const sAudio = new Audio('sounds/snare.mp3');
const dAudio = new Audio('sounds/tom-1.mp3');
const jAudio = new Audio('sounds/tom-2.mp3');
const kAudio = new Audio('sounds/tom-3.mp3');
const lAudio = new Audio('sounds/tom-4.mp3');
const audioFiles = [wAudio, aAudio, sAudio, dAudio, jAudio, kAudio, lAudio];

// Loop through the drums array and add a click event to each element
for (var i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", drumClick);
}

// Play a sound each time a drum is clicked
function drumClick() {
    
      
}