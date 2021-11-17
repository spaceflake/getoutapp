/** @type {HTMLElement} */ let formEl
// /** @type {HTMLElement} */ let litBtnsPuzzle
/** @type {HTMLElement} */ let logicPuzzle
/** @type {HTMLElement} */ let dialogEl

window.onload = initApp

/**Starts the app */
function initApp() {
  loadElements()
  buildScenes()
  setScene(SCENES[0])
  const form = document.querySelector("#input-form")
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    handleInput(event)
  })
}

function loadElements() {
  formEl = document.getElementById("input-form")
  // litBtnsPuzzle = document.getElementById("litBtnsWrapper")
  logicPuzzle = document.getElementById("logic-puzzle")
  dialogEl = document.querySelector("#dialog-el")
}

function setScene(SCENE) {
  // get elements
  const roomTitleEl = document.getElementById("room-title")
  const sceneSettingEl = document.getElementById("room-setting")
  const btnContainer = document.getElementById("btn-container")
  // set text on elements
  roomTitleEl.innerText = SCENE.title
  sceneSettingEl.innerText = SCENE.sceneSetting
  // hide puzzle elements by default
  hideElement(logicPuzzle)
  // hideElement(litBtnsPuzzle)

  // check if scene has puzzle
  if (SCENE.hasPuzzle) {
    setLogicPuzzle(getRandomIndexNumber())
    createBtn()
  } else {
    createBtn()
  }
  /*Cycles through scene gotos, creates buttons and adds clickevent */
  function createBtn() {
    btnContainer.innerHTML = ""
    for (const goto of SCENE.goTos) {
      const nextSceneIndex = goto.nextScene
      const newBtn = document.createElement("button")
      newBtn.className = "btn btn-outline mb-6"
      newBtn.onclick = function () {
        if (goto.btnTxt === "Enter your name") {
          console.log("nameinput here")
          showElement(formEl)
          showElement(dialogEl)
        } else {
          hideElement(dialogEl)
          hideElement(formEl)
          setScene(SCENE[nextSceneIndex])
        }
      }
      newBtn.innerText = goto.btnTxt
      btnContainer.appendChild(newBtn)
    }
  }
}

// UTILITY FUNCTIONS
/**
 * Takes an element and removes class hidden
 * @param {HTMLElement} element
 */
function showElement(element) {
  element.classList.remove("hidden")
}
/**
 *
 * @param {HTMLElement} element
 */
function hideElement(element) {
  element.classList.add("hidden")
}
/** returns a random number between 1 and 3 */
function getRandomIndexNumber() {
  const indexNumber = Math.floor(Math.random() * 3) + 1
  return indexNumber
}
/**
 *Takes the value from input, displays dialog, hides the form element and sets the next scene.
 * @param {} event
 */
function handleInput(event) {
  const inputValue = event.target.querySelector("input").value

  dialogEl.innerHTML = `Im <span class='text-blue-400'>${inputValue}</span>. I am here for the interview.
  <br> <p class='text-gray-400'>Mr.Black replies</p> - "Haha, an interview now. I don't have time for that." <br> <p class='text-gray-400'>He looks for a piece of paper and writes something down and hands it to you.<br> He says afterwards</p><br> - "Go to that adress at that time. We'll see about that interview then. Now leave please."`
  userName = inputValue
  buildScenes()
  hideElement(formEl)
  setScene(SCENES[3])
}
