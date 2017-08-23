// var x = 'foo'
// console.log(x)
// var guessLetter;
// var lettersUsed;

// var wrongLetters;
// var letterUsedArray = [];
// var i = 0;
var guessLetter
var wordArray = ['death', 'crime', 'punishment', 'guilty', 'outlaw']
var gameWord = wordArray[Math.floor(Math.random() * wordArray.length)]
console.log(gameWord)
var gameLettersArray = gameWord.split([])
console.log(gameLettersArray.length)
var container = document.getElementById('foo')
var answer = ''
var losses = 0
// var correctLetters =[];

// function game () {
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
    // alert('your letter was found')
    // alert(guessLetter)
    answer=answer.split('')
    answer[letterIndex] = guessLetter
    answer = answer.join('')
    container.innerHTML = answer
  } else {
    // alert('your letter was not found')
    document.getElementById('loseDiv').innerHTML = losses
    if(losses++ > 5) {
      alert('you lose')
    }
  }
}
displayBlanks()
// game()




  // alert(gameLetters.length)


  //   for (var i = 0; i < guessLetter.length; i++) {
  //     var b = guessLetter[i]
  //     alert(guessLetter[i])
  //     var s = document.getElementById('winDiv')
  //     s.innerHTML = b
  //   }
  //   for (var j = 0; j < gameLetters.length; j++) {
  //     var g = gameLetters[j]
  //     gameLetters[j] = '_'
  //     alert('this is ' + gameLetters[j])
  //     var l = document.getElementById('winDiv')
  //     l.innerHTML = gameLetters[j]
  //   }
  // }


// function updateVegetablesCollection (veggies, veggie) {
//     if (veggies.indexOf(veggie) === -1) {
//         veggies.push(veggie);
//         console.log('New veggies collection is : ' + veggies);
//     } else if (veggies.indexOf(veggie) > -1) {
//         console.log(veggie + ' already exists in the veggies collection.');
//     }
// }

// var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

// updateVegetablesCollection(veggies, 'spinach');
// New veggies collection is : potato,tomato,chillies,green-pepper,spinach
// updateVegetablesCollection(veggies, 'spinach');
// spinach already exists in the veggies collection.

// for(i; i<gameLetters.length; i++) {
//     if(guessLetter === gameLetters[i]) {
//       console.log('you\'ve guessed a letter');
//     } else {
//       console.log('you suck')
//     }
// }
