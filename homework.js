 //1

    const sumsum = function(n){
     let x = 0
        for (i=1; i<=n;i++) {
            x = x + i 
        }
        return x
    }
 console.log(sumsum(5))
 





//2
    const summationEven = function(n){
        let total = 0
        for (let i=1; i<=n;i++){
        if (i %2 ==0){
        total = total + i

        }
    }
 return total
    }
console.log(summationEven(5))






//3

let gnumbers=[8, 2, 2, 4] 
let gtotal = 0
for (x in gnumbers){
    gtotal= gtotal + gnumbers[x]
}
let a= gnumbers.length
let b= gtotal/a
console.log(b)






//4
let  gapper = function(name) {
    let rere = name.split("");
    let dede = rere.reverse()
    let kaka =dede.join("")
return kaka
}
console.log(gapper("caterpillar"))
