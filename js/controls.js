export default function Controls({
  buttonPlay,
  buttonStop,
  buttonFlorest,
  buttonRain,
  buttonCoffee,
  buttonFlame,
}) {

  function play() {
    buttonPlay.classList.add('hide')
    buttonStop.classList.remove('hide')
  }

  function stop() {
    buttonStop.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function hasActiveFlorest() {
    if(!buttonFlorest.classList.contains("active")){
      buttonFlorest.classList.add("active")
    }

    if (buttonRain.classList.contains("active")){
      buttonRain.classList.remove("active")
    }

    if (buttonCoffee.classList.contains("active")){
      buttonCoffee.classList.remove("active")
    }

    if (buttonFlame.classList.contains("active")){
      buttonFlame.classList.remove("active")
    }
  }

  function hasActiveRain() {
    if(buttonFlorest.classList.contains("active")){
      buttonFlorest.classList.remove("active")
    }

    if (!buttonRain.classList.contains("active")){
      buttonRain.classList.add("active")
    }

    if (buttonCoffee.classList.contains("active")){
      buttonCoffee.classList.remove("active")
    }

    if (buttonFlame.classList.contains("active")){
      buttonFlame.classList.remove("active")
    }
  }

  function hasActiveCoffee() {
    if(buttonFlorest.classList.contains("active")){
      buttonFlorest.classList.remove("active")
    }

    if (buttonRain.classList.contains("active")){
      buttonRain.classList.remove("active")
    }

    if (!buttonCoffee.classList.contains("active")){
      buttonCoffee.classList.add("active")
    }

    if (buttonFlame.classList.contains("active")){
      buttonFlame.classList.remove("active")
    }
  }

  function hasActiveFlame() {
    if(buttonFlorest.classList.contains("active")){
      buttonFlorest.classList.remove("active")
    }

    if (buttonRain.classList.contains("active")){
      buttonRain.classList.remove("active")
    }
    
    if (buttonCoffee.classList.contains("active")){
      buttonCoffee.classList.remove("active")
    }

    if (!buttonFlame.classList.contains("active")){
      buttonFlame.classList.add("active")
    }
  }

  return {
    play,
    stop,
    hasActiveFlorest,
    hasActiveRain,
    hasActiveCoffee,
    hasActiveFlame
  }
}