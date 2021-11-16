// lightswitch functionality

// starting order for the lightswitch puzzle. Where 1 is on(green) and 0 is off(red)
let lightSwitchStates = [0, 1, 1, 1, 0, 0]

// functions
function setLightSwitchPuzzle() {
  const vectors = [
    [1, 1, 0, 1, 0, 0],
    [1, 1, 1, 0, 1, 0],
    [0, 1, 1, 0, 0, 1],
    [1, 0, 0, 1, 1, 0],
    [0, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 1],
  ]
  // every lightswitch button
  const litbtns = document.querySelectorAll("button[id^=litbtn]")
  litbtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // const btnId = e.target.id
      const btnIndex = e.target.dataset.btnNmb - 1
      lightSwitchStates = addvector(lightSwitchStates, vectors[btnIndex])
      setColor()
      checkEndCondition()
    })
  })
  // replace current state with mapped state by adding 1
  function addvector(a, b) {
    return a.map((e, i) => e + b[i])
  }

  function checkEndCondition() {
    const isAllOn = lightSwitchStates.every((num) => num % 2)
    const isAllOff = lightSwitchStates.every((num) => num % 2 === 0)

    if (isAllOn) {
      alert("great all is on")
      showElement(nextRoomBtn)
      setScene(SCENES[7], (i = 1))
    } else if (isAllOff) {
      alert("great all is off")
    } else {
      console.log("keep playing")
    }
  }
}

// setup puzzle functionality

function setColor() {
  const onOffColors = ["tomato", "green"]

  litbtn1.style.backgroundColor = onOffColors[lightSwitchStates[0] % 2]
  litbtn2.style.backgroundColor = onOffColors[lightSwitchStates[1] % 2]
  litbtn3.style.backgroundColor = onOffColors[lightSwitchStates[2] % 2]
  litbtn4.style.backgroundColor = onOffColors[lightSwitchStates[3] % 2]
  litbtn5.style.backgroundColor = onOffColors[lightSwitchStates[4] % 2]
  litbtn6.style.backgroundColor = onOffColors[lightSwitchStates[5] % 2]
}
