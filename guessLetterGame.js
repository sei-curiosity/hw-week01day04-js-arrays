const words = ["Goat"];
let word = [];
let guessedLetters = [];
let running = false;

function startGame(words) {
  if (running) return true;
  const randomIndex = Math.floor(Math.random() * words.length);
  word = words[randomIndex].split("");
  guessedLetters = word.map(function(item) {
    return "_";
  });
  running = true;
}

function guessLetter(letter) {
  startGame(words);
  let check = null;

  for (let char = 0; char < word.length; char++) {
    const item = word[char];
    if (item.toLowerCase() === letter.toLowerCase()) {
      check = true;
      guessedLetters[char] = item;
      break;
    } else {
      check = false;
    }
  }

  const guessedWord = guessedLetters.join(" ");
  if (check) {
    if (guessedLetters.join("") === word.join("")) {
      console.log(`You Win, ${word.join("")}`);
      return true;
    } else {
      console.log(`Correct, ${guessedWord}`);
    }
  } else {
    console.log(`Incorrect, ${guessedWord}`);
    word = [];
    guessedLetters = [];
    running = false;
  }
}

guessLetter("g");
guessLetter("o");
guessLetter("a");
guessLetter("t");
