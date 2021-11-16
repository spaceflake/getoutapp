/** @type {HTMLElement} */ let roomTitleEl
/** @type {HTMLElement} */ let sceneSettingEl
/** @type {HTMLElement} */ let btnContainer
/** @type {HTMLElement} */ let nextRoomBtn
/** @type {HTMLElement} */ let formEl
/** @type {HTMLElement} */ let litBtnsPuzzle
/** @type {HTMLElement} */ let logicPuzzle

window.onload = initApp

function initApp() {
  loadElements()
  buildScenes()
  setScene(SCENES[0])
  // setColor()
  // setLightSwitchPuzzle()
  const form = document.querySelector("#input-form")
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    handleInput(event)
  })
}

function loadElements() {
  roomTitleEl = document.getElementById("room-title")
  sceneSettingEl = document.getElementById("room-setting")
  btnContainer = document.getElementById("btn-container")
  nextRoomBtn = document.getElementById("nextRoom-btn")
  formEl = document.getElementById("input-form")
  litBtnsPuzzle = document.getElementById("litBtnsWrapper")
  logicPuzzle = document.getElementById("logic-puzzle")
}

function setScene(SCENE) {
  roomTitleEl.innerText = SCENE.title
  sceneSettingEl.innerText = SCENE.sceneSetting
  if (SCENE.hasPuzzle) {
    console.log("Scene has puzzle")
    setLogicPuzzle()
    hideElement(btnContainer)
  } else {
    btnContainer.innerHTML = ""
    for (const goto of SCENE.goTos) {
      const newBtn = document.createElement("button")
      newBtn.className = "btn btn-outline my-6"
      newBtn.onclick = function () {
        const nextSceneIndex = goto.nextScene
        setScene(SCENES[nextSceneIndex])
      }
      newBtn.innerText = goto.btnTxt
      btnContainer.appendChild(newBtn)
    }
  }
}
/**not used for now */
function createBtn() {
  const newBtn = document.createElement("button")
  newBtn.className = "btn btn-outline my-6"
  btnContainer.appendChild(newBtn)
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
  showElement(nextRoomBtn)
  setScene(SCENES[2], (i = 1))
}
