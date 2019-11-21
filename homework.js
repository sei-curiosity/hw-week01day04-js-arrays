/*11111111111111111
<li>Create a function that will get the sum of the numbers between 1 and n and return the answer
  <br>
    <code>summation(5) // should return 15 because 1+2+3+4+5=15</code>*/
function summation(n) {
    let arg1 = 1;
    let num = 0;
    while (arg1 <= n) {
        num = num + arg1
        arg1++
    }
    console.log(` 1- summation (${n}) = ${num}`)
}
summation(5)


/*22222222222
   <li>Create a program to get the sum of all the even numbers in a group
  <br>
    <code > summationEven(5) // should return 6 because 2+4=6</code>
  </li>*/
function even1(n1) {
    let num2 = 0;
    let num22 = n1
    for (let arg2 = 1; arg2 <= n1; n1--) {

        if (n1 % 2 === 0) {
            num2 = num2 + n1
        }


    }
    console.log(` 2- summationEven (${num22})  ${num2}`)




}
even1(5)

/*333333333333
<li>Create a function to get the average of a group of numbers 
<br>
  <code> avg([8, 2, 2, 4]) // should return 4</code>
</li>*/
function avg(arr) {
    let num = arr.length // عدد الاعداد
    let num11 = 0
    for (let x = 0; x <= arr.length - 1; x++) {
        num11 = num11 + arr[x]



    }


    let avrg = num11 / num

    return ` 3 -Avg = ${avrg}`
}

console.log(avg([3, 5, 6, 6]))


/*4444444444444
<li>Create a function to reverse the letters in a word
  <br>
    <code > reverse("caterpillar") // should return "rallipretac"</code>
  </li>*/


function reverse1(name) {
    let namesplit1;
    namesplit1 = name.split("")

    namereverse1 = ""

    for (let x = namesplit1.length - 1; x >= 0; x--) {
        namereverse1 += namesplit1[x]

    }


    return " 4- reverse  = " + namereverse1

}


console.log(reverse1("caterpillar"))



/*555555555555
<li>Create a function that takes an array of words and combines them with a dash
<br>
  <code > addDashes(['test1', 'test2', 'test3']) // should return "test1-test2-test3"</code>
</li>*/
function combines(arr1) {
    combArg = arr1.join("-")
    return " 5 - " + combArg




}

console.log(combines(["test1", "test2", "test3"]))
/*66666666666666
<li>Function that will count up to a number and back down and return a string of the climb
<br>
  <code> countUpAndDown(3) // should return "1 2 3 2 1"</code>
</li>*/
function countUpAndDown(cuntNum) {
    let loop1 = 1
    cuntString = ""

    while (loop1 <= cuntNum) {
        cuntString = cuntString +" "+ loop1.toString()
        loop1++

        if (loop1 === cuntNum) {
            num0 = cuntNum - cuntNum

            while (loop1 > num0) {
                cuntString = cuntString +" "+ loop1.toString()
                loop1--

            }while(true){
                return " 6 - "+cuntString
            }
        }



    }

}


console.log(countUpAndDown(3))




   