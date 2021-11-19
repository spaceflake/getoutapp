// lightswitch functionality

// starting order for the lightswitch puzzle. Where 1 is on(green) and 0 is off(red)
let lightSwitchStates = [0, 1, 1, 1, 0, 0]

//Diffent states of the buttons
const vectors = [
  [1, 1, 0, 1, 0, 0],
  [1, 1, 1, 0, 1, 0],
  [0, 1, 1, 0, 0, 1],
  [1, 0, 0, 1, 1, 0],
  [0, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 1],
]

// functions
function setLightSwitchPuzzle() {
  showElement(litBtnsPuzzle)
  setUpBtns()
  setColor()
}

function checkEndCondition() {
  const isAllOn = lightSwitchStates.every((num) => num % 2)
  const isAllOff = lightSwitchStates.every((num) => num % 2 === 0)

  if (isAllOn) {
    alert("great all is on")
    showElement(btnContainer)
    setScene(SCENES[9])
  } else if (isAllOff) {
    alert("great all is off")
  } else {
    console.log("keep playing")
  }
}

function addvector(a, b) {
  return a.map((e, i) => e + b[i])
}

function setUpBtns() {
  litbtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const btnIndex = e.target.dataset.btnNmb - 1
      lightSwitchStates = addvector(lightSwitchStates, vectors[btnIndex])
      setColor()
      checkEndCondition()
    })
  })
}

function setColor() {
  const onOffColors = ["tomato", "green"]
  let i = 0
  for (const btn of litbtns) {
    btn.style.backgroundColor = onOffColors[lightSwitchStates[i] % 2]
    i++
  }
}
