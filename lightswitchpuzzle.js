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

// Builds the puzzle
function setLightSwitchPuzzle() {
  setScene(SCENES[9])
  showElement(litBtnsPuzzle)
  hideElement(btnContainer)
  setUpBtns()
  setColor()
}
// checks if puzzle is solved
function checkEndCondition() {
  const isAllOn = lightSwitchStates.every((num) => num % 2)
  const isAllOff = lightSwitchStates.every((num) => num % 2 === 0)

  if (isAllOn) {
    alert("great all is on")
    sceneSettingEl.innerText =
      "The divice just vanished when all the buttons turned green. A mysterious door opens."
    showElement(btnContainer)
    hideElement(litBtnsPuzzle)
  } else if (isAllOff) {
    sceneSettingEl.innerText =
      "Great they are all red! But nothing happened. Maybe they need to be the other color?"
  } else {
    sceneSettingEl.innerText =
      "Keep tryin. Maybe they all needs to be the same color somehow?"
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
