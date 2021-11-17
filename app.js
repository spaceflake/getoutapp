/** @type {HTMLElement} */ let formEl
/** @type {HTMLElement} */ let litBtnsPuzzle
/** @type {HTMLElement} */ let logicPuzzle

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
  litBtnsPuzzle = document.getElementById("litBtnsWrapper")
  logicPuzzle = document.getElementById("logic-puzzle")
}
/**
 * Takes the SCENES and sets text and makes buttons
 * @param {} SCENE
 */
function setScene(SCENE) {
  // get elements
  const roomTitleEl = document.getElementById("room-title")
  const sceneSettingEl = document.getElementById("room-setting")
  const btnContainer = document.getElementById("btn-container")
  // set text on elements
  roomTitleEl.innerText = SCENE.title
  sceneSettingEl.innerText = SCENE.sceneSetting
  // hide extra elements by default
  hideElement(logicPuzzle)
  hideElement(litBtnsPuzzle)

  // check if scene has puzzle
  if (SCENE.hasPuzzle) {
    // setLightSwitchPuzzle()
    setLogicPuzzle(2)
    createBtn()
  } else {
    createBtn()
    // hideElement(logicPuzzle)
  }
  /**Cycles through scene gotos, creates buttons and adds clickevent */
  function createBtn() {
    btnContainer.innerHTML = ""
    for (const goto of SCENE.goTos) {
      const newBtn = document.createElement("button")
      newBtn.className = "btn btn-outline mb-6"
      newBtn.onclick = function () {
        const nextSceneIndex = goto.nextScene
        setScene(SCENES[nextSceneIndex])
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
function hideElement(element) {
  element.classList.add("hidden")
}

function handleInput(event) {
  const inputValue = event.target.querySelector("input").value
  const dialog = document.querySelector("#dialog-el")
  dialog.innerHTML = `Im <span class='text-blue-400'>${inputValue}</span>. I am here for the interview.
  <br> <p class='text-gray-400'>Mr.Black replies</p> - "Haha, an interview now. I don't have time for that." <br> <p class='text-gray-400'>He looks for a piece of paper and writes something down and hands it to you.<br> He says afterwards</p><br> - "Go to that adress at that time. We'll see about that interview then. Now leave please."`
  userName = inputValue
  buildScenes()
  hideElement(formEl)
  setScene(SCENES[2])
}
