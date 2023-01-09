/* jshint esversion: 11 */

// Button press, keyboard press and volume slider

const synthButton = document.querySelectorAll(".button");
let volume = document.querySelector(".volume input");

let audio = new Audio("assets/audio/kick1.wav");

let clickedKey;

const playTune = (button) => {
  clickedKey = document.querySelector(`[data-key="${button}"]`);
  if (!clickedKey) return;
  clickedKey.classList.add("active");
  let dataSound;
  if (document.getElementById("change").checked) {
    dataSound = clickedKey.dataset.sound2;
  } else {
    dataSound = clickedKey.dataset.sound1;
  } 
  audio.src = `assets/audio/${dataSound}.wav`;
  audio.currentTime = 0 ;
  audio.play();

  // audio.addEventListener("ended", function() {
  //   clickedKey.classList.remove("active");
  // });
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 100);
};

synthButton.forEach(button => {
  button.addEventListener("click", () => playTune(button.dataset.key));
});

const handleVolume = (e) => {
  audio.volume = e.target.value / 100;
};

const pressedKey = (e) => {
  playTune(e.key);
};

volume.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);

// Accordion menu

const questions = document.querySelectorAll(".question");

questions.forEach(question => {
  question.addEventListener("click", event => {
    questions.forEach(question => {
      question.classList.remove("active");
      console.log(question);
    });
    console.log(question.classList);
    if (question.dataset.active) {
      console.log("a");
      question.classList.remove("active");
      delete question.dataset.active ;
    } else {
      console.log(question);
      question.classList.add("active");
      question.dataset.active = true;
    }
  });
});

// Modal

