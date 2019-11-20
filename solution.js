// function Summation(n){
//     let sum = 0;
//       for(i = 0; i <= n; i++){
//         sum += i; 
//          }
//     console.log(sum)
//          }
// Summation(5);

// function Summation2(m){
//     for ( let j =0 ; j<=m ; j++){
//         let sum=0;
//         if (j %2 === 0) {
//         sum += j  
//     }
//     console.log(sum)
//     }
// } 
// Summation2(15)

// function getSumEven (k){
//     let sum =0;
//     for (let i=0; i<=k; i++){
//         if (i %2 == 0){
//             sum +=i;
//         }
//     } console.log(sum)
// }          
// getSumEven(4)
// let values = [8, 2, 2, 4];
// let sum = values.reduce((previous, current) => current += previous);
// let avg = sum / values.length;

// console.log(avg)


// function ReverseString(str) { 
//     return str.split('').reverse().join('') 
//  } 
   
//  // Function call  
//  console.log(ReverseString("caterpillar")) 
let k = [1,2,3];

function countDown (k) {
    
    let count = [k];
    for (let i = k - 1; i > 0; i--) {
        //Adding front elements
        count.unshift(i);
        //adding back elements
        count.push(i);
    }
    return count.join(" ");
}
countDown(k)
