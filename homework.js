
function abc(x){ 
let i = 1
let num = 0


while (i <= x) {
   
   num = num + i;
   i++;
  
}
console.log(num);
}
abc (5);

/*
Create a program to get the sum of all the even numbers in a group
summationEven(5) // should return 6 because 2+4=6
*/

function even(x){
let i = 1
let num = 0
let even1 = 0

while (i < x) {
    num = num + i;
    
    if (i % 2 === 0) {
      even1 = even1 + i  
    }
    i++;    
}
return even1

}
console.log(even (5));

//let name = ['meshal'];

//name.reverse (['meshal']);

//console.log(name);
//------------------

let addDashes = ["test1","test2","test3"];
let names = ["meshal", "rassam", "faleh"];

function dash (x){

   console.log(x.join(" - "));
}

dash (names);



//Create a function to get the average of a group of numbers
//avg([8, 2, 2, 4]) // should return 4

let group = [8,2,2,4];

let i = 0
avg = 0

for (i; i < group.length; i++ ) {
    group[i] 
    avg = avg + group[i] 
}

console.log(avg / group.length);
