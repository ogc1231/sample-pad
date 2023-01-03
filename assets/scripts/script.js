// calling elements with button class into script
const buttons = document.querySelectorAll(".button")

buttons.forEach(function(button) {
    // logs elements called when button clicked to console
    console.log(button)
    // when button clicked calls playSound()
    button.addEventListener("click", function() {
        playSound(button)
    } )
})

// function play audio data files when called
function playSound(button) {
    // pull in audio data
    const soundAudio = document.getElementById(button.dataset.sound)
    // audio restarts when button pressed again
    soundAudio.currentTime = 0 
    // plays audio file
    soundAudio.play()
}
