/* jshint esversion: 11 */

// Button Press, Keyboard Press and Volume Slider. This code taken and adapted from mutiple sources linked in README.md
const synthButton = document.querySelectorAll(".button");
let volume = document.querySelector(".volume input");

let audio = new Audio("assets/audio/kick.wav");

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
  audio.currentTime = 0;
  audio.play();

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

// Accordion Menu, This code taken and adapted from a source linked in README.md
const questions = document.querySelectorAll(".question");

questions.forEach(question => {
  question.addEventListener("click", event => {
    questions.forEach(question => {
      question.classList.remove("active");
    });
    if (question.dataset.active) {
      question.classList.remove("active");
      delete question.dataset.active;
    } else {
      question.classList.add("active");
      question.dataset.active = true;
    }
  });
});