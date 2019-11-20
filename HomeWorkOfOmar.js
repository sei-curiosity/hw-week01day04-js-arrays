// 1 

function sum1 (num) {
      let x = 0
    for (let i = 1; i<= num;i++){
        console.log(i++);
        x=i+x
        
    }
    

}

// console.log(sum1(15));



// 2


function sum2(num2) {
    let x =0
for (let i = 0; i<num2 ;i++) {
    // console.log(i);
     if ( i%2==0) {
           x += i;
         //    console.log(x);
      }
    }
   return x     
}

// console.log(sum2(6));

//  3 

function averg (a,b,c,d) {
let i = [a,b,c,d]
    x = (a+b+c+d)/i.length
    return x;
}

//console.log(averg(1,2,3,4));


// 4 

function reverser(words){
    return words.split("").reverse().join("");
}
//console.log(reverser("omar"));

//5 

function addDash (t1,t2,t3,t4){
let j = [t1,t2,t3,t4]

return j.join(" - "); 
}
//console.log(addDash("TEST1","TEST2","TEST3","TEST4"));

//6 

function countUpanddown(number1,number2,number3,number4) {
    let i = [number1,number2,number3,number4];
   
        console.log(i[0],i[1],i[2],i[3],i[2],i[1]);
        
}
//countUpanddown(1,2,3,4);
// stupid way to slove this hahahahahaahahhahahahahahah 

//7 
function withA (a1,a2,a3,a4) {
 let  i=[a1,a2,a3,a4];
    if (a1=='a'){
        return a1
    } else if (a2=='a'){
        return a2

    } else  if (a3=='a'){
        return a3
    } else  if (a4=='a'){
        return a4
    }
}
//console.log(withA("hello","apple","string","number"));

//8 too hard for me 
//9 too hard for me too 

