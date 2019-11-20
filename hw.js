//1
var n = Number(prompt("Enter the total elements in an Array"));
var arr = {};
var sum = 0, i;
for(i = 0; i < n; i++) 
{
arr[i] = Number(prompt("Enter element " + (Number(i) + 1)));
sum += arr[i];
}
console.log('Sum of the n Number: '+sum);
//2

for (let i = 0; i <= 5; i++) {}

let sum = 0;
for (let i = 0; i <= 5; i++) {
	if (i % 2 === 0) {
		sum += i;
	}
}
 
console.log(sum);
// //3 
function calculate(array) {
    return array.reduce( (a,b) => a + b) / array.length;
}
console.log(calculate([8, 2, 2, 4]))

//4 
let str=('caterpillar')
function ReverseString(str) { 
  
 } 
console.log (str.reverse())