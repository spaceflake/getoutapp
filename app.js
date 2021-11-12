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

function getGoTos() {
  return SCENES[currentRoom].goTos
}

setScene()

function setScene() {
  const roomTitleEl = document.getElementById("room-title")
  const roomSettingEl = document.getElementById("room-setting")
  const setTitle = SCENES[currentRoom].title
  const setRoomSetting = SCENES[currentRoom].roomSetting

  roomTitleEl.textContent = setTitle
  roomSettingEl.textContent = setRoomSetting
}
const nextRoomBtn = document.getElementById("nextRoom-btn")
nextRoomBtn.addEventListener("click", goToNextroom)

function goToNextroom() {
  const nextRoom = SCENES[currentRoom].nextRoom
  currentRoom = nextRoom
  setScene()
}
