/* jshint esversion: 11 */

const synthButton = document.querySelectorAll(".button")
volume = document.querySelector(".volume input")

let audio = new Audio("assets/audio/kick.wav")

let clickedKey;

const playTune = (button) => {
  clickedKey = document.querySelector(`[data-key="${button}"]`)
  clickedKey.classList.add("active")
  let dataSound = clickedKey.dataset.sound
  audio.src = `assets/audio/${dataSound}.wav`
  audio.currentTime = 0 
  audio.play()

  // audio.addEventListener("ended", function() {
  //   clickedKey.classList.remove("active")
  // })
  setTimeout(() => {
    clickedKey.classList.remove("active")
  }, 100);
}

synthButton.forEach(button => {
  button.addEventListener("click", () => playTune(button.dataset.key))
})

const handleVolume = (e) => {
  audio.volume = e.target.value / 100;
}

const pressedKey = (e) => {
  playTune(e.key)
}

volume.addEventListener("input", handleVolume)
document.addEventListener("keydown", pressedKey)

// Accordion menu

const questions = document.querySelectorAll(".question")

questions.forEach(question => {
  question.addEventListener("click", event => {
    questions.forEach(question => {
      question.classList.toggle("active");
    })
    console.log(question.classList)
    if (question.classList.contains("active")) {
      console.log("a")
      question.classList.add("active");
    } else {
      console.log("b")
      question.classList.re("active");
    }
  });
});