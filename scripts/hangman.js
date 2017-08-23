// var x = 'foo'
// console.log(x)
// var guessLetter;
// var lettersUsed;
// var correctLetters;
// var wrongLetters;
// var letterUsedArray = [];
// var i = 0;
function game () {

  var lose = 0
  var guessLetter
  var wordArray = ['death', 'crime', 'punishment', 'guilty', 'outlaw']
  var gameWord = wordArray[Math.floor(Math.random() * wordArray.length)]
  console.log(gameWord)
  var gameLetters = gameWord.split('')
  console.log(gameLetters)

  for (var i = 0; i < gameLetters.length; i++) {
    var g = gameLetters[i]
    console.log('this is ' + g)
    var a = 'b'
    console.log('this is ' + a);
    a = '_'
    console.log('this is ' + a)
  }
  document.onkeyup = function (event) {
    guessLetter = event.key
    console.log('onkeyup' + guessLetter)
    alert("you've pressed " + guessLetter)
    if (gameLetters.indexOf(guessLetter) !== -1) {
      alert('your letter was found')
      alert(guessLetter)
      var x = document.getElementById('foo')
      x.innerHTML = guessLetter
    } else {
      alert('your letter was not found')
    }
    for (var i = 0; i < guessLetter.length; i++) {
      var b = guessLetter[i]
      alert(guessLetter[i])
      var s = document.getElementById('wordDiv')
      s.innerHTML = b
    }
  }
}
game()

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
