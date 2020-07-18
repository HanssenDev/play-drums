// Store drum buttons in an array
const drums = document.querySelectorAll("button.drum");

// Constructor function for drum objects
function Drum(audio, keyNumber) {
  this.audio = audio;
  this.keyNumber = keyNumber;
}

// Drum objects
const wDrum = new Drum(new Audio("sounds/tom-1.mp3"), 87);
const aDrum = new Drum(new Audio("sounds/tom-2.mp3"), 65);
const sDrum = new Drum(new Audio("sounds/tom-3.mp3"), 83);
const dDrum = new Drum(new Audio("sounds/tom-4.mp3"), 68);
const jDrum = new Drum(new Audio("sounds/crash.mp3"), 74);
const kDrum = new Drum(new Audio("sounds/kick-bass.mp3"), 75);
const lDrum = new Drum(new Audio("sounds/snare.mp3"), 76);

// Loop through the drums array and add a click event to each element
for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function () {
    // Store text of drums
    let drumText = this.innerHTML;

    // Play a drum audio file based on which drum was clicked
    switch (drumText) {
      case "w":
        wDrum.audio.play();
        break;
      case "a":
        aDrum.audio.play();
        break;
      case "s":
        sDrum.audio.play();
        break;
      case "d":
        dDrum.audio.play();
        break;
      case "j":
        jDrum.audio.play();
        break;
      case "k":
        kDrum.audio.play();
        break;
      case "l":
        lDrum.audio.play();
        break;
      default:
        console.log(drumText);
        break;
    }
  });
}
