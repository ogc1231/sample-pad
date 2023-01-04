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

const playTune = (button) => {
    audio.src = `assets/audio/${button}.wav`
    audio.play()

    const clickedKey = document.querySelector(`[data-key="${button}"]`)
    clickedKey.classList.add("active")
}

synthButton.forEach(button => {
    button.addEventListener("click", () => playTune(button.dataset.sound))
})

const pressedKey = (e) => {
    playTune(e.button)
}

document.addEventListener("keydown", pressedKey)

// Accordion menu

const question = document.querySelectorAll(".question")

question.forEach(question => {
  question.addEventListener("click", event => {
    question.classList.toggle("active");    
  });
});