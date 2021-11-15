window.onload = initApp

function initApp() {
  setScene(SCENES[7])
  setColor()
  setLightSwitchPuzzle()
  const form = document.querySelector("#input-form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    handleInput()
  })
}

// state
let userName = ""
const SCENES = [
  {
    title: "the interview",
    img: "pathToImg - ?",
    sceneSetting:
      "So here you are again sitting in an office, waiting to be called in for a job interview. Let´s hope all goes well this time. After sitting here for some time now the secretary finally shows signs of life and lets you know that Mr.Black will see you now.",
    goTos: [
      {
        btnTxt: "Enter the office",
        btnFunction: function () {
          setScene(SCENES[1])
        },
      },
    ],
    nextRoom: 1,
  },
  {
    title: "the interview",
    img: "pathToImg - ?",
    sceneSetting:
      "As you enter the office, you notice the black marble floors and walls. While beautiful and elegant it seems to absorb the light entering the room, leaving it dark and mysterious. Mr.Black acknowledged you and ask you to take a seat.",
    goTos: [
      {
        btnTxt: "Sit down",
        btnFunction: function () {
          setScene(SCENES[2])
        },
      },
    ],
    nextRoom: 2,
  },
  {
    title: "the interview",
    img: "images/mrblack.jpg",
    sceneSetting: `Mr.Black finishing up whatever he was doing at the computer. Looks at you for a moment and asks - Who are you?`,
    goTos: [
      {
        btnTxt: "Enter your name",
        btnFunction: function () {
          showElement(formEl)
          hideElement(nextRoomBtn)
        },
      },
      {
        btnTxt: "Leave the office",
        btnFunction: function () {
          const clearDialog = (document.querySelector(
            "#dialog-el"
          ).textContent = "")
          setScene(SCENES[3])
        },
      },
    ],
    nextRoom: 3,
  },
  {
    title: "Villa Enigma",
    img: "pathToImg-mansion",
    sceneSetting:
      "You arrive a bit early to the adress from the note. What you face is magnificent. You approach with awe and as you get closer you can see the front door is wide open. That is a bit strange, but you are at the right adress and at the right time.",
    goTos: [
      {
        btnTxt: "Enter the Villa",
        btnFunction: function () {
          setScene(SCENES[4])
        },
      },
    ],
    nextRoom: 4,
  },
  {
    title: "Hallway",
    img: "pathToImg-hallway",
    sceneSetting: `You enter the hallway. It's very elegant. There are a few doors on the sides with numbers on them you also see a little table in the middle with a folded letter on it. As you get closer, you can see ${userName} written on it. You unfold it and it reads: Welcome to your interview ${userName}, proceed to door 1.`,
    goTos: [
      {
        btnTxt: "Enter door 1",
        btnFunction: function () {
          setScene(SCENES[5])
        },
      },
    ],
    nextRoom: 5,
  },
  {
    title: "The Office",
    img: "pathToImg-theOffice",
    sceneSetting:
      "This looks like an office. There is desk with a computer on it. ",
    goTos: [
      {
        btnTxt: "Go to the computer",
        btnFunction: function () {
          setScene(SCENES[6])
          showElement(logicPuzzle)
          setLogicPuzzle()
          hideElement(nextRoomBtn)
        },
      },
    ],
    nextRoom: 6,
  },
  {
    title: "The Office",
    img: "pathToImg-theOffice",
    sceneSetting: "the computer - puzzle",
    goTos: [
      {
        btnTxt: "Go through mysterious door",
        btnFunction: function () {
          hideElement(logicPuzzle)
          setScene(SCENES[7])
        },
      },
    ],
    nextRoom: 7,
  },
  {
    title: "The Library",
    sceneSetting:
      "Another dark room. There is a small table in the middle of the room with a device on it. It seems there is 6 buttons on it. Some are lit",
    goTos: [
      {
        btnTxt: "go to device",
        btnFunction: function () {
          showElement(litBtnsPuzzle)
          hideElement(nextRoomBtn)
        },
      },
      {
        btnTxt: "next",
        btnFunction: function () {
          setScene(SCENES[8])
          hideElement(litBtnsPuzzle)
        },
      },
    ],
    nextRoom: 8,
  },
  {
    title: "The End",
    sceneSetting:
      "You made it through. Well done! I guess you got the job then.",
    goTos: [
      {
        btnTxt: "Play Again?",
        btnFunction: function () {
          setScene(SCENES[0])
        },
      },
    ],
    nextRoom: 8,
  },
]

const roomTitleEl = document.getElementById("room-title")
const sceneSettingEl = document.getElementById("room-setting")
const nextRoomBtn = document.getElementById("nextRoom-btn")
const formEl = document.getElementById("input-form")
const litBtnsPuzzle = document.getElementById("litBtnsWrapper")
const logicPuzzle = document.getElementById("logic-puzzle")

function setScene(SCENES, i = 0) {
  roomTitleEl.innerText = SCENES.title
  sceneSettingEl.innerText = SCENES.sceneSetting

  nextRoomBtn.onclick = SCENES.goTos[i].btnFunction

  nextRoomBtn.innerText = SCENES.goTos[i].btnTxt
}

// UTILITY FUNCTIONS
function showElement(element) {
  element.classList.remove("hidden")
}
function hideElement(element) {
  element.classList.add("hidden")
}

function handleInput() {
  const inputValue = document.querySelector("#answer-El").value
  const dialog = document.querySelector("#dialog-el")
  dialog.innerHTML = `Im <span class='text-blue-400'>${inputValue}</span>. I am here for the interview.
  <br> <p class='text-gray-400'>Mr.Black replies</p> - "Haha, an interview now. I don't have time for that." <br> <p class='text-gray-400'>He looks for a piece of paper and writes something down and hands it to you.<br> He says afterwards</p><br> - "Go to that adress at that time. We'll see about that interview then. Now leave please."`
  userName = inputValue
  hideElement(formEl)
  showElement(nextRoomBtn)
  setScene(SCENES[2], (i = 1))
}

// THE LOGIC PUZZLE
function setLogicPuzzle() {
  // get elements - text, input, button
  const puzzleText = document.querySelector("#puzzle-text")

  const puzzleBtn = document
    .querySelector("#puzzle-btn")
    .addEventListener("click", checkInput)
  // puzzles
  const PUZZLES = [
    {
      text: "Five people were eating apples, A finished before B, but behind C. D finished before E, but behind B. What was the finishing order?",
      answer: "CABDE",
      isTried: false,
      isAnswerCorrect: false,
    },
    {
      text: "The day before two days after the day before tomorrow is Saturday. What day is it today?",
      answer: "friday",
      isTried: false,
      isAnswerCorrect: false,
    },
    {
      text: "If five cats can catch five mice in five minutes, how many minutes will it take one cat to catch one mouse?",
      answer: "5",
      isTried: false,
      isAnswerCorrect: false,
    },
  ]
  puzzleText.textContent = PUZZLES[0].text

  function checkInput() {
    let text
    const puzzleAnswer = document.querySelector("#puzzle-answer")
    let puzzleInput = document.querySelector("#puzzle-input")
    text = puzzleInput.value.toUpperCase()
    let tries = 0
    if (text === PUZZLES[0].answer) {
      puzzleAnswer.textContent = text + " is correct"
      PUZZLES[0].isAnswerCorrect = true
      showElement(nextRoomBtn)
    } else {
      puzzleAnswer.textContent = text + " is not the right answer. Try again!"
      tries++
    }
    console.log(tries)
  }
}

// lightswitch functionality

// starting order for the lightswitch puzzle. Where 1 is on(green) and 0 is off(red)
let lightSwitchStates = [0, 1, 1, 1, 0, 0]

// functions
function setLightSwitchPuzzle() {
  const vectors = [
    [1, 1, 0, 1, 0, 0],
    [1, 1, 1, 0, 1, 0],
    [0, 1, 1, 0, 0, 1],
    [1, 0, 0, 1, 1, 0],
    [0, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 1],
  ]
  // every lightswitch button
  const litbtns = document.querySelectorAll("button[id^=litbtn]")
  litbtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // const btnId = e.target.id
      const btnIndex = e.target.dataset.btnNmb - 1
      lightSwitchStates = addvector(lightSwitchStates, vectors[btnIndex])
      setColor()
      checkEndCondition()
    })
  })
  // replace current state with mapped state by adding 1
  function addvector(a, b) {
    return a.map((e, i) => e + b[i])
  }

  function checkEndCondition() {
    const isAllOn = lightSwitchStates.every((num) => num % 2)
    const isAllOff = lightSwitchStates.every((num) => num % 2 === 0)

    if (isAllOn) {
      alert("great all is on")
      showElement(nextRoomBtn)
      setScene(SCENES[7], (i = 1))
    } else if (isAllOff) {
      alert("great all is off")
    } else {
      console.log("keep playing")
    }
  }
}

// setup puzzle functionality

function setColor() {
  const onOffColors = ["tomato", "green"]

  litbtn1.style.backgroundColor = onOffColors[lightSwitchStates[0] % 2]
  litbtn2.style.backgroundColor = onOffColors[lightSwitchStates[1] % 2]
  litbtn3.style.backgroundColor = onOffColors[lightSwitchStates[2] % 2]
  litbtn4.style.backgroundColor = onOffColors[lightSwitchStates[3] % 2]
  litbtn5.style.backgroundColor = onOffColors[lightSwitchStates[4] % 2]
  litbtn6.style.backgroundColor = onOffColors[lightSwitchStates[5] % 2]
}
