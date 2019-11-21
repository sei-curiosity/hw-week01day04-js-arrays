// 1
let user=5
let n=[1,2,3,4,5]

function getSum (user )
{
    let sum=0
    for(let i=1; i<= n.length; i++)
    {
        sum += i;
    }
    return sum;
}
console.log(getSum());

//2
function summationEven(n )
{
    let sum=0
    for(let i=0; i <=n.length; i++){
       
    if(n[i] % 2 ==0)
      sum += n[i]
    }return sum
}
console.log(summationEven(4))

// 3
let avg = [8, 2, 2, 4]
function getAvg (n){
    let av=0
    let sum=0;
    for (let i=0;i<n.length;i++){
            sum += n[i];}

            av = sum/n.length;
                return av;
    }
    console.log(getAvg(avg));

    //4
    let m =['caterpillar']
    function reverse (m ){
        let new_arr = m.reverse();
        console.log(new_arr);
    }
    
    reverse(m);

    //5

    function addDash(n){
        console.log(n.join('-'));
        }
    
    console.log(addDash(n));
    
    // 6

    function countUpDown (n) {
        let count = [n];
        for (let i = n - 1; i > 0; i--) {
            
            count.unshift(i);
            count.push(i);
        }
        return count.join(" ");
    }
    console.log(countUpDown(n));

//7

function wordArr (n ) {
    let wordsA = ['cat','rabbit', 'dog','fog'];
    let wordS = "";

    for (let i = 0; i <= n.length; i++) {
        wordS = ""+n[i];
        if (wordsA.indexOf('a') != -1 )
            wordsA.push(wordS);
    }
    return wordsA;
}
console.log(wordArr (n));

//8



//  9




//  10 

const largestEvenNumber = function (numArr) {
    let largestEven = [1,2,3,10,,4,7,0];

    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] % 2 == 0) {
            if (numArr[i] > largestEven) {
                largestEven = numArr[i];
            }
        }
    }
    return largestEven;
}


    
    
