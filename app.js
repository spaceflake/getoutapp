const currentRoom = 0
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
  console.log(SCENES[currentRoom].goTos)
}

getGoTos()
