/** @typedef {{ title: String, img: String, sceneSetting: String, hasPuzzle: Boolean, goTos: Goto[], currentSceneIndex: Number}} Scene */
/** @typedef {{ btnText: String, nextScene: Number }} Goto */

// state
/** @type {String} Holds the player name. Updated in later scene with form */
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
      currentSceneIndex: 0,
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
          nextScene: 2,
        },
      ],
      currentSceneIndex: 1,
    },
    {
      title: "the interview",
      img: "images/mrblack.jpg",
      sceneSetting: `Mr.Black finishing up whatever he was doing at the computer. Looks at you for a moment and asks - Who are you?`,
      hasPuzzle: false,
      goTos: [
        {
          btnTxt: "Enter your name",
          nextScene: 3,
        },
        {
          btnTxt: "Leave the office",
          nextScene: 10,
        },
      ],
      currentSceneIndex: 2,
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
          nextScene: 4,
        },
      ],
      currentSceneIndex: 3,
    },
    {
      title: "Hallway",
      img: "pathToImg-hallway",
      sceneSetting: `You enter the hallway. It's very elegant. There are a few doors on the sides with numbers on them you also see a little table in the middle with a folded letter on it. As you get closer, you can see ${userName} written on it. You unfold it and it reads: Welcome to your interview ${userName}, proceed to door....... Which door then??`,
      hasPuzzle: false,
      goTos: [
        {
          btnTxt: "Enter door 1",
          nextScene: 6,
        },
        {
          btnTxt: "Enter door 2",
          nextScene: 11,
        },
        {
          btnTxt: "Enter door 3",
          nextScene: 11,
        },
      ],
      currentSceneIndex: 4,
    },
    {
      title: "Hallway",
      img: "pathToImg-hallway",
      sceneSetting: "Ok. Back at the hallway. Which door should we try now?",
      hasPuzzle: false,
      goTos: [
        {
          btnTxt: "The Office",
          nextScene: 6,
        },
        {
          btnTxt: "Enter door 2",
          nextScene: 11,
        },
        {
          btnTxt: "Enter door 3",
          nextScene: 11,
        },
      ],
      currentSceneIndex: 5,
    },
    {
      title: "The Office",
      img: "pathToImg-theOffice",
      sceneSetting:
        "The door closes behind you. This looks to be an office. There is desk with a computer on it. You need to solve the puzzle.",
      hasPuzzle: true,
      goTos: [
        {
          btnTxt: "Back to Hallway",
          nextScene: 5,
        },
      ],
      currentSceneIndex: 6,
    },
    {
      title: "The Office",
      img: "pathToImg-theOffice",
      sceneSetting:
        "Suddenly a secret door opens behind the desk. It looks very dark inside. Should you go through or is it better to go back to the hallway?",
      hasPuzzle: false,
      goTos: [
        {
          btnTxt: "Go through mysterious door",
          nextScene: 8,
        },
        {
          btnTxt: "Go back to the hallway",
          nextScene: 5,
        },
      ],
      currentSceneIndex: 7,
    },
    {
      title: "The Library",
      sceneSetting:
        "Another dark room. There is a small table in the middle of the room with a device on it. It seems there is 6 buttons on it. Some are lit",
      hasPuzzle: true,
      goTos: [
        {
          btnTxt: "go to device",
          nextScene: 8,
        },
        {
          btnTxt: "next",
          nextScene: 9,
        },
      ],
      currentSceneIndex: 8,
    },
    {
      title: "The End",
      sceneSetting:
        "You made it through. Well done! I guess you got the job then.",
      hasPuzzle: false,
      goTos: [
        {
          btnTxt: "Play Again?",
          nextScene: 0,
        },
      ],
      currentSceneIndex: 9,
    },
    {
      title: "Back Home",
      sceneSetting:
        "Whats a job anyway. You might win the lottery. Or just maybe you should try that interview again?",
      hasPuzzle: false,
      goTos: [
        {
          btnTxt: "Go back to the Interview",
          nextScene: 0,
        },
      ],
      currentSceneIndex: 10,
    },
    {
      title: "Door locked",
      sceneSetting: "",
      hasPuzzle: false,
      goTos: [
        {
          btnTxt: "hmm",
          nextScene: 4,
        },
      ],
      currentSceneIndex: 11,
    },
  ]
}
