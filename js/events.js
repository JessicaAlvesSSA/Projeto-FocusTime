import {
  buttonPlay,
  buttonStop,
  buttonSet,
  buttonRmv,
  buttonFlorest,
  buttonRain,
  buttonCoffee,
  buttonFlame,
  minutesDisplay,
  secondsDisplay
} from "./elements.js"

export default function ({ controls, timer, sound }) {

  buttonPlay.addEventListener('click', function () {
    controls.play()
    timer.countdown()
    sound.pressButton()
  })

  buttonStop.addEventListener('click', function () {
    controls.stop()
    timer.hold()
    sound.pressButton()
  })

  buttonFlorest.addEventListener('click', function () {
    sound.pressFlorest("play")
    sound.pressRain("pause")
    sound.pressCoffee("pause")
    sound.pressFlame("pause")
    controls.hasActiveFlorest()
    sound.pressButton()
  })

  buttonRain.addEventListener('click', function () {
    sound.pressFlorest("pause")
    sound.pressRain("play")
    sound.pressCoffee("pause")
    sound.pressFlame("pause")
    controls.hasActiveRain()
    sound.pressButton()
  })

  buttonCoffee.addEventListener('click', function () {
    sound.pressFlorest("pause")
    sound.pressRain("pause")
    sound.pressCoffee("play")
    sound.pressFlame("pause")
    controls.hasActiveCoffee()
    sound.pressButton()
  })

  buttonFlame.addEventListener('click', function () {
    sound.pressFlorest("pause")
    sound.pressRain("pause")
    sound.pressCoffee("pause")
    sound.pressFlame("play")
    controls.hasActiveFlame()
    sound.pressButton()
  })

  buttonSet.addEventListener('click', function () {
    sound.pressButton()

    let newMinutes = +minutesDisplay.textContent + 5

    if (!newMinutes) {
      timer.reset()
      return
    }

    timer.updateDisplay(newMinutes, secondsDisplay.textContent)
    timer.updateMinutes(newMinutes)
  })

  buttonRmv.addEventListener('click', function () {
    sound.pressButton()

    let newMinutes = +minutesDisplay.textContent - 5

    if (!newMinutes) {
      timer.reset()
      return
    }

    timer.updateDisplay(newMinutes, secondsDisplay.textContent)
    timer.updateMinutes(newMinutes)
  })

}