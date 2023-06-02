import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import {
  buttonPlay,
  buttonStop,
  buttonSet,
  buttonRmv,
  buttonFlorest,
  buttonRain,
  buttonCoffee,
  buttonFlame,
  svgFlorest,
  svgRain,
  svgCoffee,
  svgFlame,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js"

const controls = Controls({
  buttonRmv,
  buttonPlay,
  buttonSet,
  buttonStop,
  buttonFlorest,
  buttonRain,
  buttonCoffee,
  buttonFlame,
  svgFlorest,
  svgRain,
  svgCoffee,
  svgFlame,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay
})

const sound = Sound({
  buttonFlorest,
  buttonRain,
  buttonCoffee,
  buttonFlame,
})

Events({ controls, timer, sound })