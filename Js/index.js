const bttPlay = document.querySelector(".play")
const bttStop = document.querySelector(".stop")
const bttAdd = document.querySelector(".add")
const bttSubtract = document.querySelector(".subtract")
const bttFlorest = document.querySelector(".florest")
const bttRain = document.querySelector(".rain")
const bttCoffeeShop = document.querySelector(".cofee-shop")
const bttFire = document.querySelector(".fire")
const bttDarkmode = document.querySelector(".darkMode")

let minutesDisplay = document.querySelector(".minutes")
let secondsDisplay = document.querySelector(".seconds")

let minutes = Number(minutesDisplay.textContent)

let newMinutes
let timerTimeOut

//Events
//Timer controls
bttPlay.addEventListener("click", handlePlay)
bttStop.addEventListener("click", handlePause)
bttStop.addEventListener("dblclick", handleReset)
bttAdd.addEventListener("click", handleAddMinutes)
bttSubtract.addEventListener("click", handleSubtractMinutes)

//Audio controls
bttFlorest.addEventListener("click", handleFlorestAudio)
bttRain.addEventListener("click", handleRainAudio)
bttCoffeeShop.addEventListener("click", handleCoffeeShopAudio)
bttFire.addEventListener("click", handleFireAudio)
//Audios

const florest = new Audio("./Assets/Floresta.wav")
const rain = new Audio("./Assets/Chuva.wav")
const coffeeShop = new Audio("./Assets/Cafeteria.wav")
const fire = new Audio("./Assets/Lareira.wav")

//Functions
//Timer functions
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

function countdown() {
  let seconds = Number(secondsDisplay.textContent)
  let minutes = Number(minutesDisplay.textContent)

  timerTimeOut = setTimeout(function () {
    if (minutes == 0 && seconds == 0) {
      minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
      secondsDisplay.textContent = "00"
      pauseAudio()

      return
    }

    if (seconds <= 0) {
      seconds = 2
      minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
    }
    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")

    countdown()
  }, 1000)
}

//Audio functions
function handleFlorestAudio() {
  if (bttFlorest.classList.contains("selected")) {
    florest.pause()
    bttFlorest.classList.toggle("selected")
    return
  }
  bttFlorest.classList.toggle("selected")
  florest.play().bttFlorest.classList.toggle("selected")
}
function handleRainAudio() {
  if (bttRain.classList.contains("selected")) {
    rain.pause()
    bttRain.classList.toggle("selected")
    return
  }
  bttRain.classList.toggle("selected")
  rain.play().bttRain.classList.toggle("selected")
}
function handleCoffeeShopAudio() {
  if (bttCoffeeShop.classList.contains("selected")) {
    coffeeShop.pause()
    bttCoffeeShop.classList.toggle("selected")
    return
  }
  bttCoffeeShop.classList.toggle("selected")
  coffeeShop.play().bttCoffeeShop.classList.toggle("selected")
}
function handleFireAudio() {
  if (bttFire.classList.contains("selected")) {
    fire.pause()
    bttFire.classList.toggle("selected")
    return
  }
  bttFire.classList.toggle("selected")
  fire.play().bttFire.classList.toggle("selected")
}
