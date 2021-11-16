/** @typedef {{ title: String, img: String, sceneSetting: String, hasPuzzle: Boolean, goTos: Goto[]}} Scene */
/** @typedef {{ btnText: String, nextScene: Number }} Goto */

// state
/** Holds the player name. Updated in later scene with form */
let userName = ""

/** @type {Scene[]} */
let SCENES = []

/** Build the scenes based on the state variables */
function buildScenes() {
  SCENES = [
    {
      title: "the interview",
      img: "pathToImg - ?",
      sceneSetting:
        "So here you are again sitting in an office, waiting to be called in for a job interview. Let´s hope all goes well this time. After sitting here for some time now the secretary finally shows signs of life and lets you know that Mr.Black will see you now.",
      hasPuzzle: false,
      goTos: [
        {
          btnTxt: "Enter the office",
          nextScene: 1,
        },
      ],
      nextRoom: 1,
    },
    {
      title: "the interview",
      img: "pathToImg - ?",
      sceneSetting:
        "As you enter the office, you notice the black marble floors and walls. While beautiful and elegant it seems to absorb the light entering the room, leaving it dark and mysterious. Mr.Black acknowledged you and ask you to take a seat.",
      hasPuzzle: false,
      goTos: [
        {
          btnTxt: "Sit down",
          btnFunction: function () {
            setScene(SCENES[2])
          },
          nextScene: 2,
        },
      ],
      nextRoom: 2,
    },
    {
      title: "the interview",
      img: "images/mrblack.jpg",
      sceneSetting: `Mr.Black finishing up whatever he was doing at the computer. Looks at you for a moment and asks - Who are you?`,
      hasPuzzle: false,
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
          nextScene: 3,
        },
      ],
      nextRoom: 3,
    },
    {
      title: "Villa Enigma",
      img: "pathToImg-mansion",
      sceneSetting:
        "You arrive a bit early to the adress from the note. What you face is magnificent. You approach with awe and as you get closer you can see the front door is wide open. That is a bit strange, but you are at the right adress and at the right time.",
      hasPuzzle: false,
      goTos: [
        {
          btnTxt: "Enter the Villa",
          btnFunction: function () {
            setScene(SCENES[4])
          },
          nextScene: 4,
        },
      ],
      nextRoom: 4,
    },
    {
      title: "Hallway",
      img: "pathToImg-hallway",
      sceneSetting: `You enter the hallway. It's very elegant. There are a few doors on the sides with numbers on them you also see a little table in the middle with a folded letter on it. As you get closer, you can see ${userName} written on it. You unfold it and it reads: Welcome to your interview ${userName}, proceed to door 1.`,
      hasPuzzle: false,
      goTos: [
        {
          btnTxt: "Enter door 1",
          btnFunction: function () {
            setScene(SCENES[5])
          },
          nextScene: 5,
        },
      ],
      nextRoom: 5,
    },
    {
      title: "The Office",
      img: "pathToImg-theOffice",
      sceneSetting:
        "This looks like an office. There is desk with a computer on it. ",
      hasPuzzle: true,
      goTos: [
        {
          btnTxt: "Go to the computer",
          btnFunction: function () {
            setScene(SCENES[6])
            showElement(logicPuzzle)
            setLogicPuzzle()
            hideElement(nextRoomBtn)
          },
          nextScene: 6,
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
          nextScene: 7,
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
          nextScene: 8,
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
          nextScene: 0,
        },
      ],
      nextRoom: 8,
    },
  ]
}
