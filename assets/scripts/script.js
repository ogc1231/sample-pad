const buttons = document.querySelectorAll(".button")

buttons.forEach(function(button) {
    console.log(button)
    button.addEventListener("click", function() {
        playSound(button)
    } )
})