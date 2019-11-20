//Summation Function
let arr = [];
const summation = function(num){
    for(i=1;i<=num;i++){
        arr.push(i)
    }
    return console.log(`${arr.join(" + ")} = ${arr.reduce((a, b) => a + b, 0)}`);
    
}
summation(7);

//SummationEven Function
let arrEven = [];
const summationEven = function(num){
    for(i=1;i<=num;i++){
        if(i%2===0){
        arrEven.push(i)
        }
    }
    return console.log(`${arrEven.join(" + ")} = ${arrEven.reduce((a,b)=>a+b,0)}`);
}
summationEven(7);

//Average Function
const avg=function(arrAvg){
return console.log(arrAvg.reduce((a,b)=>a+b,0)/arrAvg.length);
}
avg([8,9,4,7]);

//Reverse Function
let reverseWord =[];
const reverse = function(strword){
  reverseWord=strword.split('');
  reverseWord=reverseWord.reverse();
  reverseWord=reverseWord.join("");
  console.log(reverseWord);

}
reverse("monano");

//addDashes Function
const addDashes = function(arrDash){
   console.log(arrDash.join("-"));
}
addDashes(['mona','alghaihab','solved','this homework','^_^']);

//countUpAndDown Function
let counter="";
const countUpAndDown = function(num){
    for(i=1;i<=num;i++){
        counter+=i+' ';
        if(i==num)
        {
            for(j=num-1;j>0;j--){
                counter+=j+' ';
            }
        }
    }
    console.log(counter);
}
countUpAndDown(3);

//wordsWithA Function
let findWords=[];
let search="";
const wordsWithA = function(strwords){
    // solved using nested for loops
    // for(i=0;i<strwords.length;i++){
    //     search = strwords[i];
    //     search = search.split("");
    //     for(j=0;j<search.length;j++){
    //         if(search[j].toLowerCase()==='a'){
    //             findWords.push(strwords[i]);
    //             break;
    //         }
    //     }
    // }
    strwords.forEach((item) => {
        for(let i in item){
            if(item[i].toLowerCase()==='a'){
                findWords.push(item);
                break;
            }
        }
    })
    console.log(findWords);
}
wordsWithA(['cat','mon','anna','big','kaml']);

//wordsWithLetter Function
let findWordsLetter=[];
let searchLetter="";
const wordsWithLetter = function(letter,strwords){
    // solved using nested for loops
    // for(i=0;i<strwords.length;i++){
    //     searchLetter = strwords[i];
    //     searchLetter = searchLetter.split("");
    //     for(j=0;j<searchLetter.length;j++){
    //         if(searchLetter[j].toLowerCase()===letter){
    //             findWordsLetter.push(strwords[i]);
    //             break;
    //         }
    //     }
    // }
    strwords.forEach((item) => {
        for(let i in item){
            if(item[i].toLowerCase()=== letter){
                findWordsLetter.push(item);
                break;
            }
        }})
    console.log(findWordsLetter);
}
wordsWithLetter('c',['cat','mon','anna','big','kaml']);

//longestWord Function
let strlongestWord="";
let arrLongestWord=[];
const longestWord =function(word){
     arrLongestWord = word.split(" ");
    for(i=0;i<arrLongestWord.length;i++){
        if(strlongestWord.length<arrLongestWord[i].length){
            strlongestWord=arrLongestWord[i];
        }
    }
    // solved using forEach
    // arrLongestWord.forEach((item) => {
    //     if(strlongestWord.length<item.length){
    //         strlongestWord=item;
    //     }
    // })
    console.log(strlongestWord);
}
longestWord("What a wonderful life");

//largestEvenNumber Function
let max = 0;
const largestEvenNumber = function(arrNumbers){
    for(i = 0;i<arrNumbers.length;i++){
        if(arrNumbers[i]%2===0){
            if(max<arrNumbers[i]){
                max=arrNumbers[i];
            }
        }
    }
    console.log(max);
}
largestEvenNumber([2,5,3,4,10,6,7,8]);

//Hangman Game
let arrHangman=['M','O','N','A'];
let arrGuessed=['_','_','_','_'];
let arrInput =['M','B','L','J','O','N','M','L','K','S','A']
let guessedLetter="";
let index =0;
let rom =0;
let gssNum =arrHangman.length;
let numberOfTry=6;
const hangmanGame=function(){
while((arrHangman.length - gssNum) < arrHangman.length){
if(numberOfTry===0){console.log(`
           |
           |
           |
            (X_X)
              |
             /|\\
              |
            /   \\\  You Lost`);
    break;
}
    guessedLetter = arrInput[rom];
   
    console.log(`User Enter: ${guessedLetter} Number of try remaining: ${numberOfTry-1}`);

    if(guessedLetter===arrHangman[index]){
        arrGuessed.splice(index,1,guessedLetter);
         console.log(`Correct, ${arrGuessed}`)
        index++;
        rom++;
        gssNum--;
    }
    else{ 
        console.log(`Incorrect, ${arrGuessed}`)
        rom++;
        numberOfTry--;
    }
}
}
hangmanGame();