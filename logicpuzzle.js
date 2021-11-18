// THE LOGIC PUZZLE

const PUZZLES = [
  {
    text: "Five people were eating apples, A finished before B, but behind C. D finished before E, but behind B. What was the finishing order?",
    answer: "CABDE",
    isTried: false,
    isAnswerCorrect: false,
  },
  {
    text: "The day before two days after the day before tomorrow is Saturday. What day is it today?",
    answer: "FRIDAY",
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

/**
 *
 * @param {Number} i
 */
function setLogicPuzzle(i) {
  puzzleText.innerText = ""
  puzzleText.innerText = PUZZLES[i].text
  const puzzleBtn = document
    .querySelector("#puzzle-btn")
    .addEventListener("click", checkInput)

  showElement(logicPuzzle)

  function checkInput() {
    let text
    const puzzleAnswer = document.querySelector("#puzzle-answer")
    let puzzleInput = document.querySelector("#puzzle-input")
    text = puzzleInput.value.toUpperCase()
    if (text === PUZZLES[i].answer) {
      puzzleAnswer.textContent = text + " is correct"
      PUZZLES[i].isAnswerCorrect = true
      setScene(SCENES[8])
      hideElement(logicPuzzle)
    } else {
      puzzleAnswer.textContent = text + " is not the right answer. Try again!"
    }
  }
}
