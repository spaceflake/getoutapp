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
    title: "the interview",
    roomSetting:
      "This is a dark room. You see an old computer in the corner of the room.",
    goTos: ["computer", "door", "keypad"],
    nextRoom: 1,
  },
  {
    title: "villa entry",
    roomSetting:
      "This is a dark room. You see an old computer in the corner of the room.",
    goTos: ["computer", "door", "keypad"],
    nextRoom: 2,
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

// starting order for the lightswitch puzzle. Where 1 is on(green) and 0 is off(red)
let lightSwitchStates = [0, 1, 1, 1, 0, 0]
const mycolors = ["tomato", "green"]

function checkEndConditionOfLightSwitches() {
  const isAllOn = lightSwitchStates.every((num) => num % 2)
  const isAllOff = lightSwitchStates.every((num) => num % 2 === 0)
  if (isAllOn) {
    console.log("great all is on")
  } else if (isAllOff) {
    console.log("great all is off")
  } else {
    console.log("keep playing")
  }
}

// functions
function addEventListeners() {
  const nextRoomBtn = document
    .getElementById("nextRoom-btn")
    .addEventListener("click", goToNextroom)
  // every lightswitch button
  const litbtn1 = document
    .getElementById("litbtn1")
    .addEventListener("click", someFunction1)
  const litbtn2 = document
    .getElementById("litbtn2")
    .addEventListener("click", someFunction2)
  const litbtn3 = document
    .getElementById("litbtn3")
    .addEventListener("click", someFunction3)
  const litbtn4 = document
    .getElementById("litbtn4")
    .addEventListener("click", someFunction4)
  const litbtn5 = document
    .getElementById("litbtn5")
    .addEventListener("click", someFunction5)
  const litbtn6 = document
    .getElementById("litbtn6")
    .addEventListener("click", someFunction6)
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
  lightSwitchStates = addvector(lightSwitchStates, [1, 1, 0, 1, 0, 0])
  setColor()
  checkEndConditionOfLightSwitches()
}
function someFunction2() {
  lightSwitchStates = addvector(lightSwitchStates, [1, 1, 1, 0, 1, 0])
  setColor()
  checkEndConditionOfLightSwitches()
}
function someFunction3() {
  lightSwitchStates = addvector(lightSwitchStates, [0, 1, 1, 0, 0, 1])
  setColor()
  checkEndConditionOfLightSwitches()
}
function someFunction4() {
  lightSwitchStates = addvector(lightSwitchStates, [1, 0, 0, 1, 1, 0])
  setColor()
  checkEndConditionOfLightSwitches()
}
function someFunction5() {
  lightSwitchStates = addvector(lightSwitchStates, [0, 1, 0, 1, 1, 1])
  setColor()
  checkEndConditionOfLightSwitches()
}
function someFunction6() {
  lightSwitchStates = addvector(lightSwitchStates, [0, 0, 1, 0, 1, 1])
  setColor()
  checkEndConditionOfLightSwitches()
}

function setColor() {
  litbtn1.style.backgroundColor = mycolors[lightSwitchStates[0] % 2]
  litbtn2.style.backgroundColor = mycolors[lightSwitchStates[1] % 2]
  litbtn3.style.backgroundColor = mycolors[lightSwitchStates[2] % 2]
  litbtn4.style.backgroundColor = mycolors[lightSwitchStates[3] % 2]
  litbtn5.style.backgroundColor = mycolors[lightSwitchStates[4] % 2]
  litbtn6.style.backgroundColor = mycolors[lightSwitchStates[5] % 2]
}
