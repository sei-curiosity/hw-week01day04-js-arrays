//1
const summation = function(num){
    let total = 0;
    for (let i=1; i<=num;++i){
        total += i;
    }
    return total;
}

console.log(summation(5));
console.log('');

//2
const summationEven = function(num){
    let total = 0;
    for (let i=2; i<=num;i+=2){
        total += i;
    }
    return total;
}

console.log(summationEven(5));
console.log('');

//3
const avg = function(l){
    let total = 0;
    
    l.forEach(
        function (item){
            total += item;
        }
    );
    return total/l.length;
}

console.log(avg([8, 2, 2, 4]));
console.log('');

//4
const reverse = function (string){
    let newString = '';
    for (let i=1;i<=string.length;i++){
        newString += string[string.length-i];
    }

    return newString;
}

console.log(reverse("caterpillar"));
console.log('');

//5
const addDashes = function(arr){
    let string = '';
    for (let i=0; i<arr.length;++i){
        string+= `${arr[i]}-`
    }
    return string.substring(0,string.length-1);
}

console.log(addDashes(['test1', 'test2', 'test3']));
console.log('');

//6
const countUpAndDown = function(num){
    let string = '';
    for (let i=1;i<num;++i){
        string+= `${i} `
    }
    for (let i=num;i>0;--i){
        string+= `${i} `
    }

    return string;
}

console.log(countUpAndDown(3));
console.log('');

//7
const wordsWithA = function(arr){
    let subArr = [];
    for (let i=0;i<arr.length;i++){
        if ((arr[i].toLowerCase()).includes('a')){
            subArr.push(arr[i]);
        }
    }
    return subArr;
}

console.log(wordsWithA(['cat', 'rabbit', 'dog', 'frog']));
console.log('');

//8
const wordsWithLetter = function(letter,arr){
    let subArr = [];
    for (let i=0;i<arr.length;i++){
        if ((arr[i].toLowerCase()).includes(letter)){
            subArr.push(arr[i]);
        }
    }
    return subArr;
}

console.log(wordsWithLetter('g',['cat', 'rabbit', 'dog', 'frog']));
console.log('');

//9
const longestWord = function(string){
    let arr = string.split(' ');
    let max = 0;
    let index = 0;
    for (let i=0;i<arr.length;++i){
        if (max<arr[i].length){
            max = arr[i].length;
            index = i;
        }
    }

    return arr[index];
}

console.log(longestWord("The cat in the house"));
console.log('');

//10
const largestEvenNumber = function(arr){
    let max = 0;
    for (let i=0;i<arr.length;++i){
        if (max<arr[i] && !(arr[i]%2)){
            max = arr[i];
        }
    }
    return max;
}

console.log(largestEvenNumber([1,2,3,10,4,7,0]));
console.log('');