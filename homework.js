 
function summation (sum)
{ for ( let i=0; i<=sum; i++){
     result += i
}
return `\n summation of ${sum} is ${result} \n `
}
let result=0
console.log( summation(3))

//A2)

function sumEven(sum){
    let summitionE=0
     for ( let i=0; i<=sum; i++){
        if(i%2==0){
        summitionE += i
        }
        }
   return `\n summationEven of ${sum} is ${summitionE} \n `
}

console.log(sumEven(5))

//A3)

const Ava =function (group){
    let sum = 0 
         for (i=0;i<group.length;i++){
           sum += group[i]
         } 
        console.log(`The Avarge of ${group} is ${sum/group.length}\n `)
}

Ava([8, 2, 2, 4])

   
//A4)
function reverseS(word){
    let revWord = word.split("")
    revWord.reverse()      
    console.log(`the reverse of ${word} is: `+ revWord.join(""))
 
    }

reverseS("caterpillar")
    
//A5)

function addDashes(dash){
console.log(`\n`+ dash.join(" - "))
}
addDashes(['test1', 'test2', 'test3'])
//A6)
function countUpAndDown (max){
    let count = 0
     for (j=1 ; j<=max; j++){
              count=j 
              console.log(count)
                // think about 


        }
}
countUpAndDown(3)
//A7)
// function wordsWithA(searchA){
//     searchA.forEach(function(item,index,searchA){
//         let word = search("a", searchA);
//         console.log(`hello ${word}at ${index}in ${searchA}`)
//       })
// }
// wordsWithA(['cat', 'rabbit', 'dog', 'frog'])

//A8)
function largestEvenNumber(largest){
    let result
    let len = largest.length
for (i=0 ; i<largest.length;i++)
if (largest[i] % 2 ==0 ){
    result = largest[i]
    console.log(result)
    floor(result)
    console.log(result)
    }//return result
}
largestEvenNumber([1,2,3,10,4,7,0])