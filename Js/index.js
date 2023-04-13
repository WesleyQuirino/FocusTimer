const bttPlay = document.querySelector(".play")
const bttStop = document.querySelector(".stop")
const bttAdd = document.querySelector(".add")
const bttSubtract = document.querySelector(".subtract")
const bttFlorest = document.querySelector(".florest")
const bttRain = document.querySelector(".rain")
const bttCoffeeShop = document.querySelector(".cofee-shop")
const bttFire = document.querySelector(".fire")

let minutesDisplay = document.querySelector(".minutes")
let secondsDisplay = document.querySelector(".seconds")

let minutes = Number(minutesDisplay.textContent)
let newMinutes
let timerTimeOut
//Timer controls
bttPlay.addEventListener("click", handlePlay)
bttStop.addEventListener("click", handlePause)
bttStop.addEventListener("dblclick", handleReset)
bttAdd.addEventListener("click", handleAddMinutes)
bttSubtract.addEventListener("click", handleSubtractMinutes)
//Timer functions
function countdown() {
  let seconds = Number(secondsDisplay.textContent)
  let minutes = Number(minutesDisplay.textContent)

  timerTimeOut = setTimeout(function () {
    if (minutes == 0 && seconds == 0) {
      minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
      secondsDisplay.textContent = "00"

      return
    }

    if (seconds <= 0) {
      seconds = 60
      minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
    }
    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")

    countdown()
  }, 1000)
}
function handlePlay() {
  if (newMinutes === 0 || newMinutes === undefined) {
    alert("Favor adicionar a quantidade de tempo")
    return
  }
  countdown()
}
function handlePause() {
  clearTimeout(timerTimeOut)
}
function handleReset() {
  clearTimeout(timerTimeOut)

  newMinutes = 0

  minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
  secondsDisplay.textContent = String(0).padStart(2, "0")
}
function handleAddMinutes() {
  const addFiveMinutes = 5
  newMinutes = Number(minutesDisplay.textContent) + addFiveMinutes

  minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
}
function handleSubtractMinutes() {
  const subtractFiveMinutes = 5
  if (newMinutes === 0 || newMinutes === undefined) {
    alert("Não a tempo a ser removido!")
    return
  }

  if (newMinutes <= 5) {
    clearTimeout(timerTimeOut)

    newMinutes = 0

    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(0).padStart(2, "0")
    return
  }

  newMinutes = Number(minutesDisplay.textContent) - subtractFiveMinutes

  minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
}

//Audios
const florest = new Audio("./Assets/Floresta.wav")
const rain = new Audio("./Assets/Chuva.wav")
const coffeeShop = new Audio("./Assets/Cafeteria.wav")
const fire = new Audio("./Assets/Lareira.wav")
//Audio controls
bttFlorest.addEventListener("click", handleFlorestAudio)
bttRain.addEventListener("click", handleRainAudio)
bttCoffeeShop.addEventListener("click", handleCoffeeShopAudio)
bttFire.addEventListener("click", handleFireAudio)
//Audio functions
function audioSelected(buttonSelected, audioName) {
  if (buttonSelected.classList.contains("selected")) {
    audioName.pause()
    buttonSelected.classList.toggle("selected")
    return
  }
  buttonSelected.classList.toggle("selected")
  audioName.play().buttonSelected.classList.toggle("selected")
}
function handleFlorestAudio() {
  audioSelected(bttFlorest, florest)
}
function handleRainAudio() {
  audioSelected(bttRain, rain)
}
function handleCoffeeShopAudio() {
  audioSelected(bttCoffeeShop, coffeeShop)
}
function handleFireAudio() {
  audioSelected(bttFire, fire)
}

//Display mode
const bodyMode = document.querySelector("body")
const bttMode = document.querySelector(".button-mode")
const bttLightModeIcon = document.querySelector(".light-mode-icon")
const bttDarkModeIcon = document.querySelector(".dark-mode-icon")
//Display events
bttMode.addEventListener("click", displayMode)
//Display functions
function displayMode() {
  bodyMode.classList.toggle("light-mode")
  bttLightModeIcon.classList.toggle("hide")

  bodyMode.classList.toggle("dark-mode")
  bttDarkModeIcon.classList.toggle("hide")
}
