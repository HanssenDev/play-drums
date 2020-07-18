// Store drum buttons in an array
const drums = document.querySelectorAll("button.drum");

// Constructor function for drum objects
function DrumObject(audio, keyNumber, element) {
  this.audio = audio;
}

// Drum objects
const wDrum = new DrumObject(new Audio("sounds/tom-1.mp3"));
const aDrum = new DrumObject(new Audio("sounds/tom-2.mp3"));
const sDrum = new DrumObject(new Audio("sounds/tom-3.mp3"));
const dDrum = new DrumObject(new Audio("sounds/tom-4.mp3"));
const jDrum = new DrumObject(new Audio("sounds/crash.mp3"));
const kDrum = new DrumObject(new Audio("sounds/kick-bass.mp3"));
const lDrum = new DrumObject(new Audio("sounds/snare.mp3"));

// Loop through the drums array and add a click event to each element
for (let i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function () {
    // Store text of drums
    let drumText = this.innerHTML;

    playDrum(drumText);

    buttonAnimation(drumText);
  });
}

// listens for key presses and runs the playDrum() function
document.addEventListener("keydown", function (event) {
  playDrum(event.key);

  buttonAnimation(event.key);
});

function playDrum(key) {
  // Play a drum audio file based on which drum was clicked or button pressed
  switch (key) {
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
      console.log("Wrong key!");
      break;
  }
}

function buttonAnimation(currentKey) {
  const activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
