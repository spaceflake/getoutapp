/** @type {HTMLElement} */ let formEl
/** @type {HTMLElement} */ let litBtnsPuzzle
/** @type {HTMLElement} */ let logicPuzzle
/** @type {HTMLElement} */ let puzzleText
/** @type {HTMLElement} */ let dialogEl
/** @type {HTMLElement} */ let btnContainer
/** @type {HTMLElement} */ let roomTitleEl
/** @type {HTMLElement} */ let sceneSettingEl
/** @type {HTMLElement} */ let litbtns

/**Starts the app */
function initApp() {
  loadElements()
  // setLightSwitchPuzzle()
  buildScenes()
  setScene(SCENES[0])
  const form = document.querySelector("#input-form")
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    handleInput(event)
  })
}

window.onload = initApp

/**loads elements */
function loadElements() {
  formEl = document.getElementById("input-form")
  litBtnsPuzzle = document.getElementById("litBtnsWrapper")
  logicPuzzle = document.getElementById("logic-puzzle")
  dialogEl = document.querySelector("#dialog-el")
  btnContainer = document.getElementById("btn-container")
  roomTitleEl = document.getElementById("room-title")
  sceneSettingEl = document.getElementById("room-setting")
  puzzleText = document.querySelector("#puzzle-text")
  litbtns = document.querySelectorAll("button[id^=litbtn]")
}

/**Displays scene */
function setScene(SCENE) {
  // set text on elements
  roomTitleEl.innerText = SCENE.title
  sceneSettingEl.innerText = SCENE.sceneSetting
  // hide puzzle elements by default
  hideElement(dialogEl)
  // hideElement(litBtnsPuzzle)
  createBtn(SCENE)
}

/** Cycles through scene gotos, creates buttons and adds clickevent */
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
      } else if (goto.btnTxt === "Enter door 1") {
        hideElement(logicPuzzle)
        setLogicPuzzle(PUZZLES[getRandomIndexNumber()])
        showElement(logicPuzzle)
        setScene(SCENES[7])
      } else {
        hideElement(dialogEl)
        hideElement(formEl)
        hideElement(logicPuzzle)
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
 * Takes element and adds class hidden
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

/** To hinder the user from entering username more
 * @type {Boolean} */
let isUserNameEntered = false

/**
 *Takes the value from input, displays dialog, multiple choices on input, hides the form element and sets the next scene on the right condition.
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
    changePlaceholder(inputPlaceholder, "try 'why', or 'skip' to leave")
    isUserNameEntered = true
    buildScenes()
  } else if (inputValue.value === "why") {
    renderText(`But I did have an appointment today`, dialogEl, userStyle)
    setTimeout(function () {
      renderText(
        "I'm writing down an address and a time on this note. Go to that address at that time. We'll see about that interview then. Now leave please.",
        dialogEl,
        bossStyle
      )
    }, 1000)
    clearInput(inputValue)
    changePlaceholder(inputPlaceholder, "try 'skip' to leave")
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
