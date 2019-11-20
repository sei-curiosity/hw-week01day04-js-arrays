// Q1: Solutionp
// Create Summarize  1 to n 
// let N = 3 ;

function Summation(N){

        console.log("Welcome to SEI! ")
        let result = 0; 
        for ( let i = 1 ; i <= N ; i++ )
    
    {  
        result += i
    

    }
        
    console.log ("Summation all numbers =  "+ result)


}
Summation(15);

//----Q2---:
// Sum all given Even Numbers 

function SumEvenNumber(N)
{

    let Total = 0;

    for ( let i=0; i<=N; i++)
    {
        //console.log(i)
        if ( i%2===0)
        {
            Total +=i;

            // Print the Sum of Even Numbers only 

            
        }

    }
return Total;
}

console.log("The Sum of all even numbers are "+ SumEvenNumber(5))
//console.log(SumEvenNumber(5));
//or
//SumEvenNumber(5);



//----Q3-----Sum the Average of a group Numbers---



console.log(" ^^Lets Calculate the Average^^  ")

function Average()
 
{

    let A = [8, 2, 2, 4];
    let Avg =0 ; // Intitialized by Zero.
    let Sum =0;
    for ( let i = 0 ; i< A.length ; i++) 
    {
       Sum += A[i]
    
    }
     Avg = Sum / A.length 
    // avg = sum / TotalNumbers

    return Avg;

    
    
}

let R= Average();
console.log("The Average number = " + R) 



//---Q4----Reverse Letters of Catterpiller-----


// I need to convert the string in reverse order.
// output = rellipretaC 
// using methods such as split(),reverse(),Join()
// first, split the world , we need to shift the word
// //
// function ReverseWord(word)
// {
//     console.log("*_*_*_*Lets Reverse the Word*_*_*")
    
//     let newWord= " ";   // I'll initial a new word as string
      
//                         //  save the reverse version of word 
// for (let i = 0 ; i<word.length ;i++ )
// {
//     newWord += word[i].split(' ').reverse().join(' '); //Split Word/reserve/COMBINE(by JOIN)
//     //console.log(" The word is " + word )
//     // I should shuffle the word by using method splice
//     return newWord;
// }


// }
// console.log( ReverseWord("Caterpiller") )






 

