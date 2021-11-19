// THE LOGIC PUZZLE
/** @typedef() Puzzle*/
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
 *Dislays a random puzzle with the param
 * @param {Number} i
 */
function setLogicPuzzle(puzzle) {
  showElement(logicPuzzle)
  puzzleText.innerText = ""
  puzzleText.innerText = puzzle.text
  const puzzleBtn = document
    .querySelector("#puzzle-btn")
    .addEventListener("click", checkInput)
  function checkInput() {
    let text
    const puzzleAnswer = document.querySelector("#puzzle-answer")
    let puzzleInput = document.querySelector("#puzzle-input")
    text = puzzleInput.value.toUpperCase()
    if (text === puzzle.answer) {
      puzzleAnswer.textContent = text + " is correct"
      puzzle.isAnswerCorrect = true
      setScene(SCENES[8])
      hideElement(logicPuzzle)
    } else {
      puzzleAnswer.textContent = text + " is not the right answer. Try again!"
    }
  }
}
