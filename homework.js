// #1
const summation = function(number)
{

    for(let num = 0; num <= number; num++)
    {
        return(num)
    }
    console.log(summation(5))
}
// #2
const summationEven = function(number)
{
    for(let num = 0; num <= number; num++)
    if(num % 2 == 0 )
    {
        return num
    }
console.log(summationEven(7))
}
// #3
const avg = function(n1,n2,n3,n4)
{
    let alln = n1+n2+n3+n4
    let average = alln/4
    return average
}
console.log(avg(8,2,2,4))
// #4
const reverse = function(word)
{
    let newword = newword.reverse()
return newword
}
console.log(reverse(caterpillar))
// #5
const dash = function(addDash)
{
    let addDashi = addDash.join('-')
    return addDashi
}
console.log(dash('test1', 'test2', 'test3'))
// #6

// #7
const wordsWithA = function(words)
{
    let finfAletter = words.search(a)
    return words
}
console.log(wordsWithA('cat', 'rabbit', 'dog', 'frog'))
