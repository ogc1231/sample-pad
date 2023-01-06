/* jshint esversion: 11 */
// // calling elements with button class into script
// const buttons = document.querySelectorAll(".button")

// buttons.forEach(function(button) {
//     // logs elements called when button clicked to console
//     console.log(button)
//     // when button clicked calls playSound()
//     button.addEventListener("click", function() {
//         playSound(button)
//     } )
// })

// // function play audio data files when called
// function playSound(button) {
//     // pull in audio data
//     const soundAudio = document.getElementById(button.dataset.sound)
//     // audio restarts when button pressed again
//     soundAudio.currentTime = 0 
//     // plays audio file
//     soundAudio.play()
// }

const synthButton = document.querySelectorAll(".button")

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

const pressedKey = (e) => {
  playTune(e.key)
}

document.addEventListener("keydown", pressedKey)

// Accordion menu

const questions = document.querySelectorAll(".question")

questions.forEach(question => {
  question.addEventListener("click", event => {
    questions.forEach(question => {
      question.classList.remove("active");
    })
    console.log(question.classList)
    if (question.classList.contains("active")) {
      console.log("a")
      question.classList.remove("active");
    } else {
      console.log("b")
      question.classList.add("active");
    }
  });
});