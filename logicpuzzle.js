// THE LOGIC PUZZLE
function setLogicPuzzle() {
  showElement(logicPuzzle)
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
      showElement(btnContainer)
    } else {
      puzzleAnswer.textContent = text + " is not the right answer. Try again!"
      tries++
    }
  }
}
