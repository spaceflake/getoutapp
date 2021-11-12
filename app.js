const currentRoom = 1
const SCENES = [
  {
    title: "entry",
    goTos: ["computer", "door", "keypad"],
  },
  {
    title: "light switch",
    goTos: ["switch board"],
  },
]
const INVENTORY = []

function getGoTos() {
  return SCENES[currentRoom].goTos
}

getGoTos()

function setScene() {
  const roomTitleEl = document.getElementById("room-title")
  const roomSettingEl = document.getElementById("room-setting")

  roomTitleEl.textContent = SCENES[currentRoom].title
  roomSettingEl.textContent = "sometext"
}

setScene()
