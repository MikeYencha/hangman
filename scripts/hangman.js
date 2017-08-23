
var guessLetter // container for user guess
var wordArray = ['death', 'crime', 'punishment', 'guilty', 'outlaw'] // these are my preselected words
var gameWord = wordArray[Math.floor(Math.random() * wordArray.length)] // randomly selects word from array of preselected words
var gameLettersArray = gameWord.split([]) // splits randomly selected word into an array of letters
var container = document.getElementById('foo') // this is where underscores and user correct gusses are displayed
var answer = ''
var losses = 0 // variable to collect number of incorrect guesses

displayBlanks = function () {
  for(var i = 0; i <+ gameLettersArray.length; i++) {
    answer = answer + '_'
    container.innerHTML = answer
  }
}

document.onkeyup = function (event) {
  guessLetter = event.key
  var letterIndex = gameWord.indexOf(guessLetter)
  if (letterIndex !== -1) {
    answer=answer.split('')
    answer[letterIndex] = guessLetter
    answer = answer.join('')
    container.innerHTML = answer
  } else {
    document.getElementById('loseDiv').innerHTML = losses
    if(losses++ > 5) {
      alert('you lose')
    }
  }
}
displayBlanks()
