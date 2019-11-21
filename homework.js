function summation(number) {
  let output = ``;
  let result = null;

  for (let i = 1; i <= number; i++) {
    result += i;
    if (i === number) {
      output += `${number} = ${result}`;
    } else {
      output += `${i} + `;
    }
  }

  console.log(output);
}

summation(15);

console.log("-".repeat(30));

function summationEven(number) {
  let output = ``;
  let result = null;
  let evenNumbers = [];

  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }

  result = evenNumbers.reduce(function(pre, currentValue, currentIndex) {
    output += `${pre} + ${currentValue} + `;

    if (currentIndex === evenNumbers.length - 1) {
      output += `= ${pre + currentValue}`;
    }

    return pre + currentValue;
  });

  output = output.split(" + =").join(" =");
  console.log(output);
}

summationEven(5);

console.log("-".repeat(30));

function avg(array) {
  let result = array.reduce(function(prev, current) {
    return prev + current;
  });

  result /= array.length;

  console.log(result);
}

avg([8, 2, 2, 4]);

console.log("-".repeat(30));

function reverse(string) {
  const reversedString = string
    .split("")
    .reverse()
    .join("");

  console.log(reversedString);
}

reverse("caterpillar");

console.log("-".repeat(30));

function addDashes(words) {
  const joinedWords = words.join("-");
  console.log(joinedWords);
}

addDashes(["test1", "test2", "test3"]);

console.log("-".repeat(30));

function wordsWithA(words) {
  const wordsA = [];

  words.forEach(function(item, index) {
    if (item.includes("a")) {
      wordsA.push(item);
    }
  });
  console.log(wordsA);
}

wordsWithA(["cat", "rabbit", "dog", "frog"]);

console.log("-".repeat(30));

function wordsWithLetter(letter, words) {
  const wordsA = [];

  words.forEach(function(item, index) {
    if (item.includes(letter)) {
      wordsA.push(item);
    }
  });
  console.log(wordsA);
}

wordsWithLetter("g", ["cat", "rabbit", "dog", "frog"]);

console.log("-".repeat(30));

function longestWord(string) {
  let word = "";

  const words = string.split(" ");
  words.forEach(function(item, index) {
    if (item.length > word.length) {
      word = item;
    }
  });

  console.log(word);
}

longestWord("The cat in the house");

console.log("-".repeat(30));

function largestEvenNumer(numbers) {
  let largest = 0;
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element % 2 === 0) {
      if (element > largest) {
        largest = element;
      }
    }
  }

  console.log(largest);
}

largestEvenNumer([1, 2, 3, 10, 4, 7, 0]);

function countUpAndDown(number) {
  let output = "";

  for (let i = 1; i <= 3; i++) {
    output += `${i} `;
  }

  for (let i = number - 1; i > 0; i--) {
    if (i === 1) {
      output += `${i}`;
    } else {
      output += `${i} `;
    }
  }

  console.log(output);
}

countUpAndDown(3);
