
// num=[20]
// const x=function(){
// for(i in num);
//     i=1
//     z=i+x[i]
//     console.log(z)
//     return z
    
var numM=[];
    numM=[1,2,4,5];
    function sumArray(array) {
        for (
          var
            index = 0,              // The iterator
            length = array.length,  // Cache the array length
            sum = 0;                // The total amount
            index < length;         // The "for"-loop condition
            sum += array[index++]   // Add number on each iteration
        );
        return sum;
      }
 console.log(sumArray(numM))
  let name=[];
  name=['caterpillar'];
        name[index].reverse();



       name.reverse();
  //console.log()

 //console.log(name.index.reverse())