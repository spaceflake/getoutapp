/** @type {HTMLElement} */ let formEl
// /** @type {HTMLElement} */ let litBtnsPuzzle
/** @type {HTMLElement} */ let logicPuzzle
/** @type {HTMLElement} */ let dialogEl
/** @type {HTMLElement} */ let btnContainer
/** @type {HTMLElement} */ let roomTitleEl
/** @type {HTMLElement} */ let sceneSettingEl

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

window.onload = initApp

function loadElements() {
  formEl = document.getElementById("input-form")
  // litBtnsPuzzle = document.getElementById("litBtnsWrapper")
  logicPuzzle = document.getElementById("logic-puzzle")
  dialogEl = document.querySelector("#dialog-el")
  btnContainer = document.getElementById("btn-container")
  roomTitleEl = document.getElementById("room-title")
  sceneSettingEl = document.getElementById("room-setting")
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
  hideElement(dialogEl)
  // hideElement(litBtnsPuzzle)

  // check if scene has puzzle
  if (SCENE.hasPuzzle) {
    setLogicPuzzle(getRandomIndexNumber())
    createBtn(SCENE)
  } else {
    createBtn(SCENE)
  }
}
/*Cycles through scene gotos, creates buttons and adds clickevent */
function createBtn(SCENE) {
  btnContainer.innerHTML = ""
  for (const goto of SCENE.goTos) {
    const nextSceneIndex = goto.nextScene
    const newBtn = document.createElement("button")
    newBtn.className = "btn btn-outline mb-6"
    newBtn.onclick = function () {
      if (goto.btnTxt === "Enter your name") {
        dialogEl.innerHTML = ""

        showElement(formEl)
        showElement(dialogEl)
        hideElement(btnContainer)
      } else {
        hideElement(dialogEl)
        hideElement(formEl)
        setScene(SCENES[nextSceneIndex])
      }
    }
    newBtn.innerText = goto.btnTxt
    btnContainer.appendChild(newBtn)
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
let isUserNameEntered = false
/**
 *Takes the value from input, displays dialog, hides the form element and sets the next scene.
 * @param {EventTarget} event
 */
function handleInput(event) {
  let inputValue = event.target.querySelector("input")
  let inputPlaceholder = document.getElementsByName("answer")[0]
  const userStyle = "bg-gray-800 max-w-max ml-auto px-4 py-2 mb-4"
  const bossStyle = "bg-gray-400 text-gray-900 max-w-max mr-auto px-4 py-2 mb-4"

  if (!isUserNameEntered && inputValue.value.length < 20) {
    userName = inputValue.value
    renderText(
      `I'm <span class='text-blue-400'>${inputValue.value}</span>. I am here for the interview.`,
      dialogEl,
      userStyle
    )
    setTimeout(function () {
      renderText(
        "Haha, an interview now. I don't have time for that.",
        dialogEl,
        bossStyle
      )
    }, 1000)
    clearInput(inputValue)
    changePlaceholder(
      inputPlaceholder,
      "type '1' to say why or '2' for more....if you want to skip type 'skip'"
    )
    isUserNameEntered = true
    buildScenes()
  } else if (inputValue.value === "skip") {
    buildScenes()
    hideElement(formEl)
    hideElement(dialogEl)
    showElement(btnContainer)
    setScene(SCENES[3])
  } else {
    renderText(inputValue.value, dialogEl, userStyle)
    setTimeout(function () {
      renderText("Sorry! Did not catch that.", dialogEl, bossStyle)
    }, 1000)
    clearInput(inputValue)
  }

  // dialogEl.innerHTML = `I'm <span class='text-blue-400'>${inputValue}</span>. I am here for the interview.
  // <br> <p class='text-gray-400'>Mr.Black replies</p> - "Haha, an interview now. I don't have time for that." <br> <p class='text-gray-400'>He looks for a piece of paper and writes something down and hands it to you.<br> He says afterwards</p><br> - "Go to that address at that time. We'll see about that interview then. Now leave please."`
  // userName = inputValue
  // buildScenes()
  // hideElement(formEl)
  // setScene(SCENES[3])
}
/**
 *Takes in string to be rendered, creates a paragraph element and styles it. Appends to div
 * @param {String} text
 * @param {HTMLDivElement} div
 * @param {String} style
 */
function renderText(text, div, style) {
  const newP = document.createElement("p")
  newP.innerHTML = " - " + text
  newP.className = style
  div.appendChild(newP)
  newP.scrollIntoView(false)
}
/**
 *
 * @param {InputEvent} input //vet inte vad jag ska skriva för typ
 */
function clearInput(input) {
  input.value = ""
}
/**
 *Changes the text on the elements placeholder
 * @param {HTMLElement} placeholder
 * @param {String} text
 */
function changePlaceholder(placeholder, text) {
  placeholder.placeholder = text
}
