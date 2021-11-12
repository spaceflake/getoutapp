window.onload = initApp

function initApp() {
  setScene()
  setColor()
  addEventListeners()
}

// state
let currentRoom = 0
const SCENES = [
  {
    title: "entry",
    roomSetting:
      "This is a dark room. You see an old computer in the corner of the room.",
    goTos: ["computer", "door", "keypad"],
    nextRoom: 1,
  },
  {
    title: "light switch",
    roomSetting:
      "Another dark room. There is a small table in the middle of the room with a device on it. It seems there is 6 buttons on it. Some are lit",
    goTos: ["switch board"],
    nextRoom: 0,
  },
]
const PUZZLES = [
  {
    text: "Five people were eating apples, A finished before B, but behind C. D finished before E, but behind B. What was the finishing order?",
    answer: "CABDE",
    isSolved: false,
    isAnswerCorrect: false,
  },
  {
    text: "The day before two days after the day before tomorrow is Saturday. What day is it today?",
    answer: "friday",
    isSolved: false,
    isAnswerCorrect: false,
  },
  {
    text: "If five cats can catch five mice in five minutes, how many minutes will it take one cat to catch one mouse?",
    answer: "5",
    isSolved: false,
    isAnswerCorrect: false,
  },
]
const INVENTORY = []

let state = [0, 1, 1, 1, 0, 0]

const mycolors = ["tomato", "green"]

// functions
function addEventListeners() {
  const nextRoomBtn = document.getElementById("nextRoom-btn")
  nextRoomBtn.addEventListener("click", goToNextroom)
  // every lightswitch button
  const litbtn1 = document.getElementById("litbtn1")
  const litbtn2 = document.getElementById("litbtn2")
  const litbtn3 = document.getElementById("litbtn3")
  const litbtn4 = document.getElementById("litbtn4")
  const litbtn5 = document.getElementById("litbtn5")
  const litbtn6 = document.getElementById("litbtn6")
  // adding click event on every lightswitch button
  litbtn1.addEventListener("click", someFunction1)
  litbtn2.addEventListener("click", someFunction2)
  litbtn3.addEventListener("click", someFunction3)
  litbtn4.addEventListener("click", someFunction4)
  litbtn5.addEventListener("click", someFunction5)
  litbtn6.addEventListener("click", someFunction6)
}

function getGoTos() {
  return SCENES[currentRoom].goTos
}

function setScene() {
  const roomTitleEl = document.getElementById("room-title")
  const roomSettingEl = document.getElementById("room-setting")
  const setTitle = SCENES[currentRoom].title
  const setRoomSetting = SCENES[currentRoom].roomSetting

  roomTitleEl.textContent = setTitle
  roomSettingEl.textContent = setRoomSetting
}

function goToNextroom() {
  const nextRoom = SCENES[currentRoom].nextRoom
  currentRoom = nextRoom
  setScene()
}

// setup puzzle functionality

// lightswitch functionality

function addvector(a, b) {
  return a.map((e, i) => e + b[i])
}

function someFunction1() {
  state = addvector(state, [1, 1, 0, 1, 0, 0])
  setColor()
}
function someFunction2() {
  state = addvector(state, [1, 1, 1, 0, 1, 0])
  setColor()
}
function someFunction3() {
  state = addvector(state, [0, 1, 1, 0, 0, 1])
  setColor()
}
function someFunction4() {
  state = addvector(state, [1, 0, 0, 1, 1, 0])
  setColor()
}
function someFunction5() {
  state = addvector(state, [0, 1, 0, 1, 1, 1])
  setColor()
}
function someFunction6() {
  state = addvector(state, [0, 0, 1, 0, 1, 1])
  setColor()
}

function setColor() {
  litbtn1.style.backgroundColor = mycolors[state[0] % 2]
  litbtn2.style.backgroundColor = mycolors[state[1] % 2]
  litbtn3.style.backgroundColor = mycolors[state[2] % 2]
  litbtn4.style.backgroundColor = mycolors[state[3] % 2]
  litbtn5.style.backgroundColor = mycolors[state[4] % 2]
  litbtn6.style.backgroundColor = mycolors[state[5] % 2]
}
