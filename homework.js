// A 1
const summation = function(num) {
  let sum = 0;
  for (let index = 0; index < num + 1; index++) {
    sum = sum + index;
  }
  return sum;
};
console.log(summation(5));

// A2

const summationEven = function(num) {
  let sum = 0;
  for (let index = 0; index < num + 1; index += 2) {
    sum = sum + index;
  }
  return sum;
};
console.log(summationEven(50));

// A3

const avg = function(num) {
  let sum = 0;
  const leng = num.length;
  for (let index = 0; index < leng; index++) {
    sum = sum + num[index];
  }
  return sum / leng;
};

console.log(avg([8, 2, 2, 4]));

// A 4

const reversF = function(word) {
  lettr = word.split("");
  lettr.reverse();

  return lettr.join("");
};

console.log(reversF("caterpillar"));

// A 5

const addDashes = function(words) {
  return words.join("-");
};

console.log(addDashes(["test1", "test2", "test3"]));

//6

const countUpAndDown = function(num) {
  let result1 = "";
  for (let index = 1; index <= num; index++) {
    result1 = result1 + index.toString() + " ";
  }

  for (let index = num - 1; index > 0; index--) {
    result1 = result1 + index.toString() + " ";
  }
  return result1;
};

console.log(countUpAndDown(3));

// A 7
const wordsWithA = function(myWords) {
  const findA = function(word) {
    return word.includes("a");
  };

  return myWords.filter(findA);
};

console.log(wordsWithA(["cat", "rabbit", "dog", "frog"]));

// A 8

const wordsWithLetter = function(ltr, myWords) {
  const findA = function(word) {
    return word.includes(ltr);
  };

  return myWords.filter(findA);
};

console.log(wordsWithLetter("g", ["cat", "rabbit", "dog", "frog"]));

// A 9
const longestWord = function(sintence) {
  words = sintence.split(" ");
  let leng = 0;
  let longest = "";
  for (let index = 0; index < words.length; index++) {
    if (words[index].length > leng) {
      leng = words[index].length;
      longest = words[index];
    }
  }
  return longest;
};

console.log(longestWord("The cat in the house"));
// A 10

const largestEvenNumber = function(arr) {
  let lrg = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 2 == 0 && arr[index] > lrg) {
      lrg = arr[index];
    }
  }
  return lrg;
};
console.log(largestEvenNumber([1, 2, 3, 10, 4, 7, 0]));
