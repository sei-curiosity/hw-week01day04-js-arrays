function sum(num){
    result =0
    for(i =1;i<=num;i++){
        result+=i
    }
    return result;
}

function evenSum(num){
    result=0
    for(i=0;i<=num;i+=2){
        result +=i
    }
    return result
}

function avrage(num){
    sum =0
    for(i in num){
        sum+=i
    }
    result(sum/num.length)
}

function revWord(word){
    wordArray=word.split("")
    wordArray.reverse();
    return wordArray.join("")

}

console.log(revWord('gmh'))
 function dasheWords(wordList){
     return wordList.join(' - ')
 }


 function countTwoWays(num){
    count = ''
    for(i=1;i<=num;i++){
        count+=i
    }
    for(i=num-1;i>=1;i--){
        count+=i
    }

    return count

 }


 function wordsWithA(kmm){
    aArray=[]
    for(i=0;i<kmm.length;i++){
        console.log(kmm[i])
        if(kmm[i].indexOf("a")>-1){
            console.log(kmm[i])
            aArray.unshift(kmm[i])
        }
    }
    return aArray 
 }



 function wordsWithLetter(letter,kmm){
    aArray=[]
    for(i=0;i<kmm.length;i++){
        console.log(kmm[i])
        if(kmm[i].indexOf(letter)>-1){
            console.log(kmm[i])
            aArray.unshift(kmm[i])
        }
    }
    return aArray 
 }
function theLongestWord(array){
    max =''
    for (i in array){
        if (i.length>max.length){
            max =i
        }
        return max
    }}

function LargestEven(array){
    changable = Array.from(array)
    max = null
    while(true){
        if (changable === undefined || changable.length == 0){
            break}
        if (Math.max(changable)%2 != 0){
            max =Math.max(changable)
            changable.splice( changable.indexOf(max), 1 );
            continue}
        max =Math.max(changable)  
          break  
        }
        return max

    }


