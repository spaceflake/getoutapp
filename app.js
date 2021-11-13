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
    img: "pathToImg - ?",
    roomSetting:
      "So here you are again sitting in an office, wating to be called in for a job interview. Let´s hope all goes well this time. After sitting here for some time now the secretary finally shows signs of life and lets you know that Mr.Black will see you now.",
    goTos: ["Enter the office"],
    nextRoom: 1,
  },
  {
    title: "the interview",
    img: "pathToImg - ?",
    roomSetting:
      "As you enter the office, you notice the black marble floors and walls. While beautiful and elegant. It seems to absorb the light entering the room, leaving it dark and mysterious. Mr.Black acknoledges you and ask you to take a seat.",
    goTos: ["Sit down"],
    nextRoom: 2,
  },
  {
    title: "the interview",
    img: "images/mrblack.jpg",
    roomSetting:
      "As you enter the office, you notice the black marble floors and walls. While beautiful and elegant. It seems to absorb the light entering the room, leaving it dark and mysterious. Mr.Black acknoledges you and ask you to take a seat.",
    goTos: ["Sit down"],
    nextRoom: 3,
  },
  {
    title: "the interview",
    img: "images/mrblack.jpg",
    roomSetting:
      "Mr.Black finishing up whatever he was doing at the computer. Looks at you for a moment and asks - Who are you? [load name input element and update string with'Im [name]. I am here for the interview.'] Mr.Black replies  Haha, an interview now. I don't have time for that. He looks for a piece of paper and writes something down and hands it to you. He says afterwards - Go to that adress at that time. We'll see about that interview then. Now leave please.",
    goTos: ["Leave the office"],
    nextRoom: 4,
  },
  {
    title: "Villa Enigma",
    img: "pathToImg-mansion",
    roomSetting:
      "You arrive a bit early to the adress from the note. What you face is magnificent. You approach with awe and as you get closer you can see the front door is wide open. That is a bit strange, but you are at the right adress and at the right time.",
    goTos: ["Enter the Villa"],
    nextRoom: 5,
  },
  {
    title: "Villa Enigma",
    img: "pathToImg-mansion",
    roomSetting:
      "You arrive a bit early to the adress from the note. What you face is magnificent. You approach with awe and as you get closer you can see the front door is wide open. That is a bit strange, but you are at the right adress and at the right time.",
    goTos: ["Enter the Villa"],
    nextRoom: 6,
  },
  {
    title: "The Library",
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

// starting order for the lightswitch puzzle. Where 1 is on(green) and 0 is off(red)
let lightSwitchStates = [0, 1, 1, 1, 0, 0]
const onOffColors = ["tomato", "green"]

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
  const lookBtn = document
    .getElementById("look-btn")
    .addEventListener("click", setLookAround)
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

function setLookAround() {
  console.log("looked")
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
  console.log(currentRoom)
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
  litbtn1.style.backgroundColor = onOffColors[lightSwitchStates[0] % 2]
  litbtn2.style.backgroundColor = onOffColors[lightSwitchStates[1] % 2]
  litbtn3.style.backgroundColor = onOffColors[lightSwitchStates[2] % 2]
  litbtn4.style.backgroundColor = onOffColors[lightSwitchStates[3] % 2]
  litbtn5.style.backgroundColor = onOffColors[lightSwitchStates[4] % 2]
  litbtn6.style.backgroundColor = onOffColors[lightSwitchStates[5] % 2]
}
