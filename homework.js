
// create a function that will get the sum of the numbers between 1 and n and return the answer
// summation(5) // should return 15 because 1+2+3+4+5=15
function summation(num) {
    let result= 0;
    for (let i=1; i<=num ; i++) {       
        result = i + result      
    }console.log(result)
}
summation(5)


// ceate a program to get the sum of all the even numbers in a group
// summationEven(5) // should return 6 because 2+4=6
function summationEven(num) {
    let result= 0;
    for (let i=2; i<=num ; i+=2) {
        
        result = i + result
        
    }console.log(result)
}
summationEven(5)

//Create a function to get the average of a group of numbers
function average(nums) {
let result =0
let len = nums.length
for (let i = 0; i < nums.length; i++){
        
        result = nums[i] + result
        
    }console.log(result/len)
}
let numbers = [2,4,2,8]
average(numbers)

//Create a function to reverse the letters in a word
function reverseWord(str) {

    let splitWord = str.split(''); 
    let rvrseWord = splitWord.reverse(); 
    let joinWord = rvrseWord.join(''); 
    console.log(joinWord);
}
reverseWord("caterpiller");

//Create a function that takes an array of words and combines them with a dash
function addDash(list) {
let combinedWord = list.join("-")
console.log(combinedWord)
}
let list = ['lina', 'abdulaziz','alnehabi']
addDash(list)

//Create a function that takes an array of words and combines them with a dash
function countUpAndDown(number){
    let list=[];
    for (i = 1; i <=number; i++){
       list.push(i)
    } 
    let newarr = list.slice(list,list.length-1)
    newarr.reverse()
    let res = list.concat(newarr)
    console.log(`${res}`)
    }countUpAndDown(3)



//Write a function that will tell you all of the words in an array that contain the letter `a`
function returnA(word){
    word.forEach((item) => {
    let list = item.split('')
    for(let i =0; i<list.length;i++){
        if (list[i]==='a') {
            let result = []
            result.push(item)
            console.log(result)
        }
    }
  });}
  let words = ['cat', 'dog', 'rabbit', 'frog']
  returnA(words)


//Write a function that will tell you all of the words in an array that contain a specified letter
//wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']) // should return ['dog', 'frog']

function wordsWithLetter(word,letter){
    word.forEach((item) => {
    let list = item.split('')
    for(let i =0; i<list.length;i++){
        if (list[i]===letter) {
            let result = []
            result.push(item)
            console.log(result)
        }
    }
  });}
  let words = ['cat', 'dog', 'rabbit', 'frog']
let lett = "t"
wordsWithLetter(words,lett)


//create Function that returns the longest word in sentence // should return "house"

function longestWord(str) {
    let result
    let list = []
    let i
    list = str.split(' ')
for (i=0;i<list.length;i++) {
    if (list[i].length >= result){
        result = list[i].length
    }  //compare 
    if (list[i].length===result){
     console.log(list[i]) }
    
    }}
    

let sent = "the cat is in the house"
longestWord(sent)




//Function that returns the largest even number
function largestEvenNumber(list){
    let result=0
    for (i=0;i<list.length;i++)  
        if (list[i]%2===0) {
          if (list[i] > result){
               result = list[i]; 
    }
    }
    console.log(result)
      }

let lis = [1,22,3,1,4,7,0]
largestEvenNumber(lis) 
    



