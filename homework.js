const sum= function (n){
    let total= 0

for(let i = 1; i<=n;i++){
    total=total+i
}

return total
}


//console.log(sum(5))

 function sumEven(x){
     let even=0
    for(i=0;i<=x;i++){
        if(i%2==0){
            console.log(i)
            even = even+i
        }
        
        
    }
    return even
}
//console.log("the total is :" + sumEven(8))

let x = [8,2.2,4]
let totalSum = 0
for(let i in x) {
    totalSum += x[i]
}
 

let y = x.length
 

let average = totalSum / y
 
//console.log(average)

function reverseString(a) {
    
    let splitString = a.split("")
    
    let reverseArray = splitString.reverse()
    
    let joinArray = reverseArray.join("")
   
    return joinArray
}
//console.log(reverseString("caterpillar"))

function dash(b){


let a = ['test1', 'test2', 'test3']

console.log(a.join('-'))

}
dash()