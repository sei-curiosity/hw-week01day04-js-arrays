const summation = function(num){
    //summation function returns sum of numbers from 0 to num
    let i, arr =[];
    for (i = 0;i<=num; i++){
        arr.push(i);}
    console.log("Generated numbers are:")
    console.log(arr);
    let result = 0;
    arr.forEach(item => result += item);
    console.log("Sum of those numbers is:")
    console.log(result+"\n");
}
const summationEven = function(num){
    //summationEven returns sum of even numbers from 0 until num
    let i, arr =[];
    for (i = 0;i<=num; i++){
        if(i%2 === 0){arr.push(i);}}
    console.log("Generated numbers are:")
    console.log(arr);
    let result = 0;
    arr.forEach(item => result += item);
    console.log("Sum of those numbers is:")
    console.log(result+"\n");
}
const avg = function(arr){
    //Returns the average of the arr
    let sum = 0, avgResult=0;
    //finding the sum af arr elements
    arr.forEach(item => sum += item);
    avgResult = sum / arr.length;
    console.log("Input array is:");
    console.log(arr);
    console.log("Average of that array is:");
    console.log(avgResult+"\n");
}
const reverse = function(inputString){
    let strArr;
    strArr = inputString.split("");
    strArr = strArr.reverse();
    strArr = strArr.join("");
    console.log("Input string:")
    console.log(inputString);
    console.log("Reversed string is:")
    console.log(strArr+"\n");
}
const addDashes = function(strArr){

    console.log("Input array of strings:")
    console.log(strArr);
    console.log("Joined array is:")
    console.log(strArr.join("-")+"\n");
}
const countUpAndDown = function (num){
    let arr;
    //Generate count up
    for (i = 0;i<=num; i++){
        arr.push(i);}
    //add count down
    for (i = arr.length;i>=0; i--){
        arr.push(i);})
    console.log(arr.join(""))
}
summation(5);
summationEven(5);
avg([1,2,3,4]);
reverse("Hello");
addDashes(["a","b","c"]);