

function summation(n) {
  let total = 0;
    for(let i = 1; i <= n; i++)
    {
      total += i;
    }
    return total;
}

console.log(summation(5))        

// Create a function that will get the sum of the numbers between 1 and n and return the answer
//summation(5) // should return 15 because 1+2+3+4+5=15
//<.......................................................................................

function sumEvenNumbers(n){
  let sum = 0;
  for(let i=1; i<=2*n-1; i+=2)
  {
    sum+=i;
  }
  return sum; 
}
console.log(sumEvenNumbers(5); // not finshed yet .  

function check_Even_or_Odd(n){

if (n%2==0)
{
return false
}
else 
sum_even_numbers(n)
return 
}

function sum_even_numbers(n){
let sum = 0;
{

for (let index = 0; index < 12; index++) {
if (index%2>0)  
{
  sum+=i
  
}
return sum


//Create a program to get the sum of all the even numbers in a group
//summationEven(5) // should return 6 because 2+4=6
//<...........................................................

function avg (a,b,c,d)
{
let i = [a,b,c,d]
    x = (a+b+c+d)/i.length
    return x;
}

console.log(avg(8,2,2,4));

//Create a function to get the average of a group of numbers
//avg([8, 2, 2, 4]) // should return 4
//<----------------------------------------------------------

function rvr(words)
{
return words.split("").reverse().join("");
}
console.log(rvr("shatry"));


//Create a function to reverse the letters in a word
reverse("caterpillar") // should return "rallipretac"
//<------------------------------------------------------------
function addDash (test1,test2,test3){
let x = [test1,test2,test3]

return x.join(" - "); 
}
console.log(addDash("test1","test2","test3",));

//Create a function that takes an array of words and combines them with a dash
//addDashes(['test1', 'test2', 'test3']) // should return "test1-test2-test3"
//<-----------------------------------------------------------------

function counter(n) {
let string=[];
for(let i=1; i<=n ; i++){
    string.push(i) }
   let str= string.join(" ");
   string.pop()
   str=str+" "+(string.reverse()).join(" ");
     console.log(str)
     } 

     counter(3)
 //Function that will count up to a number and back down and return a string of the climb
 //countUpAndDown(3) // should return "1 2 3 2 1"
 //<-------------------------------------------------------------

let wordsWithA = ['cat', 'rabbit', 'dog', 'frog'];


function filterItems(arr, query) {
return arr.filter(function(el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
})
}

console.log(filterItems(wordsWithA, 'a')); 

//Write a function that will tell you all of the words in an array that contain the letter `a`
//wordsWithA(['cat', 'rabbit', 'dog', 'frog']) // should return ['cat', 'rabbit']
<---------------------------------------------

function find_longest_word(str)
{
var array1 = str.match(/\w[a-z]{0,}/gi);
var result = array1[0];

for(var x = 1 ; x < array1.length ; x++)
{
  if(result.length < array1[x].length)
  {
  result = array1[x];
  } 
}
return result;
}
console.log(find_longest_word('The cat in the house'));

//Function that returns the longest word in sentence
//longestWord("The cat in the house") // should return "house"
<--------------------------------------------------------------------

let largestEvenNumber = [1,2,3,10,4,7,0];
let largest = Math.max.apply(Math,largestEvenNumber); 

console.log(largest)

//Function that returns the largest even number
//largestEvenNumber([1,2,3,10,4,7,0]) // should return "10"
