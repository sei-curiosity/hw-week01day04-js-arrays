function summation(number) {
    let sum = 1;
    for(let i=1;i<=number;i++){
        sum+=i
    } 
    console.log(sum);
} //the sum of the numbers from one to the given number.
function summationEven(number2) {
    let sum = 0;
    for(let i=1;i<=number2;i++){
        if(i%2===0)
        {sum+=i}
    } 
    console.log(sum);

} //the sum of the even numbers from 1 to the paased number.


function avg(listOfNumbers) {
let count = listOfNumbers.length
let list = 0
for(let i=0;i<count;i++){
    list+=listOfNumbers[i];
} 
console.log(list/count)
} //takes a list of numbers and returns the average.

function reverse(string1) {
    let len = string1.length
    let printing='';
    for(let i=1; i<=len ; i++){
        let l=string1.charAt(len-i);
         printing+=l
    }
console.log(printing)
}

   




 //reverse the word given.

function addDashes(arrayOfWords){
    let l=arrayOfWords.join('-');
    console.log(l)

}

function countUpAndDown(number3) {
    let string=[];
    for(let i=1; i<=number3 ; i++){
        string.push(i) }
       let str= string.join(" ");
       string.pop()
       str=str+" "+(string.reverse()).join(" ");
         console.log(str)
         } // should return "1 2 3 2 1".


function wordsWithA(listOfWords) {

   let as=[]
    for (let i = 0; i < listOfWords.length; i++) {
        if(listOfWords[i].includes("a")){
            as.push(listOfWords[i])
        }}
      console.log(as)
} // returns the words that contains an a.


function wordsWithLetter(letter, listOfWords) {

let as=[]
    for (let i = 0; i < listOfWords.length; i++) {
        if(listOfWords[i].includes(letter)){
            as.push(listOfWords[i])
        }}
      console.log(as) } // should return ['dog', 'frog'] .


function longestWord(gett) {
let listOfWords=gett.split(" ");
    let as=[]
    let num=0
    let num2=0
      for (let i = 0; i < listOfWords.length; i++) {
          if(listOfWords[i].length>num){
              num=listOfWords[i].length;
              num2=i
  
          }}
        console.log(`${listOfWords[num2]} is the awesomest thing`)}
  
 // should return longest word in a Sentence "house"


function largestEvenNumber(listOfnumber2) {


    let as=0
        for (let i = 0; i < listOfnumber2.length; i++) {
            if(listOfnumber2[i]%2==0){if(listOfnumber2[i]>as){
                as=listOfnumber2[i]
            }
        }  
    
    }
          console.log(as)
    


} // should return "10"




summation(7)

summationEven(7)

avg([2,3,5,7,8])

reverse("reversedWord")

 addDashes(arrayOfWords=['d','r','e','a','m'])

countUpAndDown(8)
wordsWithA(['cat', 'rabbit', 'dog', 'frog'])

 wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']) // should return ['dog', 'frog']

 longestWord("The cat in the house") // should return longest word in a Sentence "house"

 largestEvenNumber([1, 2, 3, 10, 4, 7, 0,11])