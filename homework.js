// 1st question 
function summation(num){
    let sum = 0
    let numbers = []
    for (let i = 1; i <= num ; i++){
       // numbers.push(i)// when I used push, it showed undefined and idk why
       numbers[i] = i 
        sum += numbers[i]
    }
    return sum
}

//console.log(summation(5))


// 2nd question
function summationEven(num){
    let sum = 0
    let numbers = []
    for (let i = 0 ; i <= num ; i++){
        numbers[i] = i
        if (numbers[i] % 2 == 0){ // if it's even
            sum += numbers[i]
        }

    }
    return sum
}

// console.log(summationEven(10))


// 3rd question
function avg(num1, num2, num3, num4){
    let average = (num1 + num2 + num3 + num4) / 4
    return average
    }

//console.log(avg(8, 2, 2, 4))


// 4th question
function reverse(word){
let letters_of_words = word.split("") // as an array
let reverse_word = letters_of_words.reverse()

return reverse_word
}

//console.log(reverse("shahad"))


// 5th question 
function addDashes(array){
    let dashed_array = array.join('-')
    return dashed_array
}

//console.log(addDashes(['Shahad', 'is', 'smart']))


// 6th question
function countUpAndDown(num){
    let numbers = []
    for (let i = 1; i <= num; i++){
        numbers[i-1] = i
    }
    for (let x = numbers.length-1 ; x >= 1 ; x--){
        numbers.push(x)
    }
    
    return numbers
}

//console.log(countUpAndDown(3))


// 7th question
function wordsWithA(stringArray){
    let containsA = []
    for (let i = 0 ; i < stringArray.length ; i++){
        if(stringArray[i].includes('a')){ // case sensitive, wont include Aziz
            containsA[i] = stringArray[i]
        }
    }

    return containsA
}

//console.log(wordsWithA(['ahmed', 'shahad', 'Aziz']))


// 8th question
function wordsWithLetter(letter, stringArray){
    let containsA = []
    for (let i = 0 ; i < stringArray.length ; i++){
        if(stringArray[i].includes(letter)){ // case sensitive, wont include Aziz
            containsA[i] = stringArray[i]
        }
    }

    return containsA
}

//console.log(wordsWithLetter("m", ['ahmed', 'shahad', 'Aziz']))


// 9th question
function longestWord(sentence){
    let longestWord
    let wordsArray = sentence.split(" ")
    let longerWordLength = 0

for(let i = 0 ; i < wordsArray.length ; i++){
 
    if(wordsArray[i].length > longerWordLength){
        longerWordLength = wordsArray[i].length
        longestWord = wordsArray[i]
    } // end if
    
}// end for loop

return longestWord

}

//console.log(longestWord("I got myself the cutest headphones ever on planet earth"))



// 10th question
function largestEvenNumber(setOfNumbers){
    let largest = 0
    for(let i = 0 ; i < setOfNumbers.length ; i++){
        if (setOfNumbers[i] % 2 == 0 && setOfNumbers[i] > largest){
                largest = setOfNumbers[i]

        }
    }
    
//console.log(`Largest number is ${largest}`)
return largest
}

largestEvenNumber([2, 11, 56, 100, 2, -2, 1029])



// Extra Practice
 const wordLetters     = ['S', 'H', 'A', 'H', 'A', 'D']; // Assuming it's global arrays
 let guessedLetters  = ['_', '_', '_', '_', '_', '_'];

function guessLetter(letter){
   
    if (guessedLetters.includes('_')){
   //console.log("You still gotta continue the game")
   
        for (let i = 0 ; i < wordLetters.length ; i++){
            if (wordLetters[i] == letter){ //wordLetters[i] == letter
                guessedLetters[i] = wordLetters[i] // it's not reflecting on the array globally :(
                console.log(`Correct ${guessedLetters}`)
                
            }// end if
            
    }//end 2nd for


}// end if


else if (!guessedLetters.includes(letter)){
    console.log(`Incorrect ${guessedLetters}`)
    
}

else {
    console.log(`You win! ${guessedLetters}`)
}


} // end function

guessLetter("A")

